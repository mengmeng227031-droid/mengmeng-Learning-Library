import { createSession, sessionCookie } from "./_shared/auth.mjs";
import { hashPhone, normalizeAccount, normalizePhone, verifyPassword } from "./_shared/crypto.mjs";
import { getSql } from "./_shared/db.mjs";
import { badRequest, json, methodNotAllowed, readJson } from "./_shared/http.mjs";

export default async (req) => {
  if (req.method !== "POST") return methodNotAllowed();

  const payload = await readJson(req);
  const account = normalizeAccount(payload.account || payload.username || payload.phone);
  const phone = normalizePhone(payload.phone || payload.account || "");
  const password = String(payload.password || "");

  if (!account || !password) {
    return badRequest("请输入账号和密码。");
  }

  const sql = getSql();
  const phoneHash = phone.length >= 7 ? hashPhone(phone) : null;
  const rows = await sql`
    select id, username, password_hash, display_name, role, status, phone_last4
    from users
    where lower(username) = ${account}
      or (${phoneHash}::text is not null and phone_hash = ${phoneHash})
    limit 1
  `;

  const user = rows[0];
  if (!user || user.status !== "active" || !verifyPassword(password, user.password_hash)) {
    return json({ ok: false, error: "账号或密码不正确。" }, 401);
  }

  const token = await createSession(user.id);
  return json(
    {
      ok: true,
      user: {
        id: user.id,
        username: user.username,
        displayName: user.display_name,
        role: user.role,
        phoneLast4: user.phone_last4
      }
    },
    200,
    { "Set-Cookie": sessionCookie(token) }
  );
};

export const config = {
  path: "/api/auth/login"
};
