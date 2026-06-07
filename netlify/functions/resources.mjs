import { requireUser } from "./_shared/auth.mjs";
import { getSql } from "./_shared/db.mjs";
import { badRequest, json, methodNotAllowed, readJson } from "./_shared/http.mjs";

export default async (req) => {
  const { user, response } = await requireUser(req);
  if (response) return response;

  const sql = getSql();

  if (req.method === "POST") {
    if (!["teacher", "admin"].includes(user.role)) {
      return json({ ok: false, error: "Forbidden" }, 403);
    }

    const payload = await readJson(req);
    const id = String(payload.id || "").trim();
    const title = String(payload.title || "").trim();
    const resourceType = String(payload.resourceType || payload.resource_type || "file").trim();
    const subject = String(payload.subject || "").trim();
    const courseId = String(payload.courseId || payload.course_id || "").trim() || null;
    const grade = String(payload.grade || "").trim() || null;
    const semester = String(payload.semester || "").trim() || null;
    const category = String(payload.category || "").trim() || null;
    const fileUrl = String(payload.fileUrl || payload.file_url || "").trim() || null;
    const sortOrder = Number(payload.sortOrder ?? payload.sort_order ?? 0);

    if (!id || !title || !subject) {
      return badRequest("缺少资料 ID、标题或学科。");
    }

    const rows = await sql`
      insert into resources (
        id, title, resource_type, subject, course_id, grade, semester, category, file_url, visible, sort_order, updated_at
      )
      values (
        ${id}, ${title}, ${resourceType}, ${subject}, ${courseId}, ${grade}, ${semester}, ${category}, ${fileUrl}, true, ${sortOrder}, now()
      )
      on conflict (id) do update set
        title = excluded.title,
        resource_type = excluded.resource_type,
        subject = excluded.subject,
        course_id = excluded.course_id,
        grade = excluded.grade,
        semester = excluded.semester,
        category = excluded.category,
        file_url = excluded.file_url,
        visible = excluded.visible,
        sort_order = excluded.sort_order,
        updated_at = now()
      returning id, title, resource_type, subject, course_id, grade, semester, category, file_url, sort_order, created_at, updated_at
    `;

    return json({ ok: true, resource: rows[0] });
  }

  if (req.method !== "GET") return methodNotAllowed();

  const url = new URL(req.url);
  const subject = url.searchParams.get("subject") || "";
  const grade = url.searchParams.get("grade") || "";
  const semester = url.searchParams.get("semester") || "";

  const resources = await sql`
    select id, title, resource_type, subject, course_id, grade, semester, category, file_url, sort_order, created_at
    from resources r
    where r.visible = true
      and (${subject} = '' or r.subject = ${subject})
      and (${grade} = '' or r.grade = ${grade})
      and (${semester} = '' or r.semester = ${semester})
      and (
        ${user.role} in ('teacher', 'admin')
        or exists (
          select 1
          from permissions p
          where p.user_id = ${user.id}
            and (
              p.resource_id = r.id
              or (r.course_id is not null and p.resource_type = 'course' and p.resource_id = r.course_id)
            )
            and p.permission in ('view', 'study', 'manage')
            and (p.expires_at is null or p.expires_at > now())
        )
      )
    order by r.sort_order, r.created_at desc
  `;

  return json({ ok: true, resources });
};

export const config = {
  path: "/api/resources"
};
