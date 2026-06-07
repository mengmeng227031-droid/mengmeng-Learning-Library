import { clearSessionCookie, parseCookies } from "./_shared/auth.mjs";
import { sha256 } from "./_shared/crypto.mjs";
import { getSql } from "./_shared/db.mjs";
import { json, methodNotAllowed } from "./_shared/http.mjs";

export default async (req) => {
  if (req.method !== "POST") return methodNotAllowed();

  const token = parseCookies(req).mm_session;
  if (token) {
    const sql = getSql();
    await sql`delete from sessions where token_hash = ${sha256(token)}`;
  }

  return json({ ok: true }, 200, { "Set-Cookie": clearSessionCookie() });
};

export const config = {
  path: "/api/auth/logout"
};
