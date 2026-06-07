import postgres from "postgres";

let sql;

export function getSql() {
  if (sql) return sql;

  const databaseUrl = getEnv("DATABASE_URL");
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  sql = postgres(databaseUrl, {
    max: 1,
    prepare: false,
    idle_timeout: 20,
    connect_timeout: 15,
    ssl: "require"
  });
  return sql;
}

export function getEnv(name) {
  if (typeof Netlify !== "undefined" && Netlify.env?.get) {
    return Netlify.env.get(name);
  }
  return process.env[name];
}
