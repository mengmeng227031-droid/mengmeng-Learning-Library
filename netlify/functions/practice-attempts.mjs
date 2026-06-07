import { requireUser } from "./_shared/auth.mjs";
import { getSql } from "./_shared/db.mjs";
import { badRequest, json, methodNotAllowed, readJson } from "./_shared/http.mjs";

export default async (req) => {
  if (req.method !== "POST") return methodNotAllowed();

  const { user, response } = await requireUser(req);
  if (response) return response;

  const payload = await readJson(req);
  const subject = String(payload.subject || "").trim();
  const courseId = String(payload.courseId || payload.course_id || "").trim();
  const unitId = String(payload.unitId || payload.unit_id || "").trim();
  const lessonId = String(payload.lessonId || payload.lesson_id || "").trim() || null;
  const activityId = String(payload.activityId || payload.activity_id || "").trim();
  const questionId = String(payload.questionId || payload.question_id || "").trim();
  const isCorrect = Boolean(payload.isCorrect ?? payload.is_correct);
  const score = Number(payload.score || (isCorrect ? 1 : 0));
  const durationSec = Math.max(0, Number(payload.durationSec ?? payload.duration_sec ?? 0));
  const answer = payload.answer || {};

  if (!subject || !courseId || !unitId || !activityId || !questionId) {
    return badRequest("缺少练习记录标识。");
  }

  const sql = getSql();
  const rows = await sql`
    insert into practice_attempts (
      user_id, subject, course_id, unit_id, lesson_id, activity_id, question_id, answer, is_correct, score, duration_sec
    )
    values (
      ${user.id}, ${subject}, ${courseId}, ${unitId}, ${lessonId}, ${activityId}, ${questionId},
      ${JSON.stringify(answer)}::jsonb, ${isCorrect}, ${score}, ${durationSec}
    )
    returning id, subject, course_id, unit_id, lesson_id, activity_id, question_id, is_correct, score, duration_sec, answered_at
  `;

  return json({ ok: true, attempt: rows[0] });
};

export const config = {
  path: "/api/practice-attempts"
};
