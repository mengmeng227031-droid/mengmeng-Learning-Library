import { neon } from "@neondatabase/serverless";

let sql;

export function getSql() {
  if (sql) return sql;

  const databaseUrl = getEnv("DATABASE_URL");
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  sql = neon(databaseUrl);
  return sql;
}

export function getEnv(name) {
  if (typeof Netlify !== "undefined" && Netlify.env?.get) {
    return Netlify.env.get(name);
  }
  return process.env[name];
}
