import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const SCRYPT_KEY_LENGTH = 64;

export function sha256(value) {
  return createHash("sha256").update(String(value)).digest("hex");
}

export function normalizeAccount(value) {
  return String(value || "").trim().toLowerCase();
}

export function normalizePhone(value) {
  return String(value || "").replace(/\D/g, "");
}

export function hashPhone(value) {
  const normalized = normalizePhone(value);
  if (!normalized) return null;
  return sha256(normalized);
}

export function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const key = scryptSync(String(password), salt, SCRYPT_KEY_LENGTH).toString("hex");
  return `scrypt$${salt}$${key}`;
}

export function verifyPassword(password, storedHash) {
  const parts = String(storedHash || "").split("$");
  if (parts.length !== 3 || parts[0] !== "scrypt") return false;

  const [, salt, key] = parts;
  const expected = Buffer.from(key, "hex");
  const actual = scryptSync(String(password), salt, SCRYPT_KEY_LENGTH);

  if (expected.length !== actual.length) return false;
  return timingSafeEqual(expected, actual);
}

export function createSessionToken() {
  return randomBytes(32).toString("base64url");
}
