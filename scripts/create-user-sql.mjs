import { hashPassword, hashPhone, normalizePhone } from "../netlify/functions/_shared/crypto.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).map((item) => {
    const [key, ...rest] = item.replace(/^--/, "").split("=");
    return [key, rest.join("=")];
  })
);

const username = String(args.username || "").trim();
const password = String(args.password || "").trim();
const displayName = String(args.name || username).trim();
const role = String(args.role || "student").trim();
const phone = normalizePhone(args.phone || "");

if (!username || !password) {
  console.error("Usage: node scripts/create-user-sql.mjs --username=student001 --password=初始密码 --name=学生昵称 [--phone=手机号]");
  process.exit(1);
}

const phoneHash = phone ? hashPhone(phone) : null;
const phoneLast4 = phone ? phone.slice(-4) : null;
const passwordHash = hashPassword(password);

function sqlString(value) {
  if (value === null || value === undefined || value === "") return "null";
  return `'${String(value).replace(/'/g, "''")}'`;
}

console.log(`insert into users (username, password_hash, phone_hash, phone_last4, display_name, role, status)
values (${sqlString(username)}, ${sqlString(passwordHash)}, ${sqlString(phoneHash)}, ${sqlString(phoneLast4)}, ${sqlString(displayName)}, ${sqlString(role)}, 'active')
on conflict (username) do update set
  password_hash = excluded.password_hash,
  phone_hash = excluded.phone_hash,
  phone_last4 = excluded.phone_last4,
  display_name = excluded.display_name,
  role = excluded.role,
  status = 'active',
  updated_at = now();`);
