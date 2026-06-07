import { requireUser } from "./_shared/auth.mjs";
import { getSql } from "./_shared/db.mjs";
import { badRequest, json, methodNotAllowed, readJson } from "./_shared/http.mjs";

export default async (req) => {
  if (req.method !== "POST") return methodNotAllowed();

  const { user, response } = await requireUser(req);
  if (response) return response;

  if (!["teacher", "admin"].includes(user.role)) {
    return json({ ok: false, error: "Forbidden" }, 403);
  }

  const payload = await readJson(req);
  const username = String(payload.username || "").trim().toLowerCase();
  const userId = String(payload.userId || payload.user_id || "").trim();
  const resourceType = String(payload.resourceType || payload.resource_type || "").trim();
  const resourceId = String(payload.resourceId || payload.resource_id || "").trim();
  const permission = String(payload.permission || "view").trim();
  const expiresAt = payload.expiresAt || payload.expires_at || null;

  if ((!username && !userId) || !resourceType || !resourceId || !permission) {
    return badRequest("缺少用户、资源或权限。");
  }

  const sql = getSql();
  const users = userId
    ? await sql`select id from users where id = ${userId} limit 1`
    : await sql`select id from users where lower(username) = ${username} limit 1`;

  const target = users[0];
  if (!target) return badRequest("用户不存在。");

  const rows = await sql`
    insert into permissions (user_id, resource_type, resource_id, permission, expires_at)
    values (${target.id}, ${resourceType}, ${resourceId}, ${permission}, ${expiresAt})
    on conflict (user_id, resource_type, resource_id, permission)
    do update set expires_at = excluded.expires_at
    returning id, user_id, resource_type, resource_id, permission, expires_at
  `;

  return json({ ok: true, permission: rows[0] });
};

export const config = {
  path: "/api/admin/permissions"
};
