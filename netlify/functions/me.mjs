import { requireUser } from "./_shared/auth.mjs";
import { getSql } from "./_shared/db.mjs";
import { json, methodNotAllowed } from "./_shared/http.mjs";

export default async (req) => {
  if (req.method !== "GET") return methodNotAllowed();

  const { user, response } = await requireUser(req);
  if (response) return response;

  const sql = getSql();
  const permissions = await sql`
    select resource_type, resource_id, permission, expires_at
    from permissions
    where user_id = ${user.id}
      and (expires_at is null or expires_at > now())
    order by resource_type, resource_id, permission
  `;
  const progress = await sql`
    select subject, course_id, unit_id, lesson_id, progress_percent, status, last_position, updated_at
    from learning_progress
    where user_id = ${user.id}
    order by updated_at desc
    limit 100
  `;

  return json({
    ok: true,
    user: {
      id: user.id,
      username: user.username,
      displayName: user.display_name,
      role: user.role,
      phoneLast4: user.phone_last4
    },
    permissions,
    progress
  });
};

export const config = {
  path: "/api/me"
};
