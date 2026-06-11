import { createSessionToken, sha256 } from "./crypto.mjs";
import { getSql } from "./db.mjs";

const COOKIE_NAME = "mm_session";
const SESSION_DAYS = 30;

export function parseCookies(req) {
  const cookieHeader = req.headers.get("cookie") || "";
  return Object.fromEntries(
    cookieHeader
      .split(";")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => {
        const index = item.indexOf("=");
        if (index === -1) return [item, ""];
        return [item.slice(0, index), decodeURIComponent(item.slice(index + 1))];
      })
  );
}

export function sessionCookie(token, remember = false) {
  const maxAge = SESSION_DAYS * 24 * 60 * 60;
  const persistent = remember ? `; Max-Age=${maxAge}` : "";
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax${persistent}`;
}

export function clearSessionCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

export async function createSession(userId) {
  const sql = getSql();
  const token = createSessionToken();
  const tokenHash = sha256(token);
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000).toISOString();

  await sql`
    insert into sessions (user_id, token_hash, expires_at)
    values (${userId}, ${tokenHash}, ${expiresAt})
  `;

  return token;
}

export async function getCurrentUser(req) {
  const token = parseCookies(req)[COOKIE_NAME];
  if (!token) return null;

  const sql = getSql();
  const tokenHash = sha256(token);
  const rows = await sql`
    select
      u.id,
      u.username,
      u.display_name,
      u.role,
      u.status,
      u.phone_last4
    from sessions s
    join users u on u.id = s.user_id
    where s.token_hash = ${tokenHash}
      and s.expires_at > now()
      and u.status = 'active'
    limit 1
  `;

  return rows[0] || null;
}

export async function requireUser(req) {
  const user = await getCurrentUser(req);
  if (!user) {
    return { user: null, response: new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }) };
  }
  return { user, response: null };
}
