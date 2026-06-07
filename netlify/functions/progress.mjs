import { requireUser } from "./_shared/auth.mjs";
import { getSql } from "./_shared/db.mjs";
import { badRequest, json, methodNotAllowed, readJson } from "./_shared/http.mjs";

export default async (req) => {
  const { user, response } = await requireUser(req);
  if (response) return response;

  if (req.method === "GET") {
    const sql = getSql();
    const rows = await sql`
      select subject, course_id, unit_id, lesson_id, progress_percent, status, last_position, updated_at
      from learning_progress
      where user_id = ${user.id}
      order by updated_at desc
    `;
    return json({ ok: true, progress: rows });
  }

  if (req.method !== "POST") return methodNotAllowed();

  const payload = await readJson(req);
  const subject = String(payload.subject || "").trim();
  const courseId = String(payload.courseId || payload.course_id || "").trim();
  const unitId = String(payload.unitId || payload.unit_id || "").trim();
  const lessonId = String(payload.lessonId || payload.lesson_id || "").trim() || null;
  const progressPercent = Math.max(0, Math.min(100, Number(payload.progressPercent ?? payload.progress_percent ?? 0)));
  const status = payload.status || (progressPercent >= 100 ? "completed" : progressPercent > 0 ? "learning" : "not_started");
  const lastPosition = payload.lastPosition || payload.last_position || {};

  if (!subject || !courseId || !unitId) {
    return badRequest("缺少学习进度标识。");
  }

  const sql = getSql();
  const rows = await sql`
    insert into learning_progress (
      user_id, subject, course_id, unit_id, lesson_id, progress_percent, status, last_position, updated_at
    )
    values (
      ${user.id}, ${subject}, ${courseId}, ${unitId}, ${lessonId}, ${progressPercent}, ${status}, ${JSON.stringify(lastPosition)}::jsonb, now()
    )
    on conflict (user_id, subject, course_id, unit_id, coalesce(lesson_id, ''))
    do update set
      progress_percent = excluded.progress_percent,
      status = excluded.status,
      last_position = excluded.last_position,
      updated_at = now()
    returning subject, course_id, unit_id, lesson_id, progress_percent, status, last_position, updated_at
  `;

  return json({ ok: true, progress: rows[0] });
};

export const config = {
  path: "/api/progress"
};
