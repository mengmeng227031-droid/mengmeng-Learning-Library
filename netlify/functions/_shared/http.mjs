export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers
    }
  });
}

export function badRequest(message) {
  return json({ ok: false, error: message }, 400);
}

export function methodNotAllowed() {
  return json({ ok: false, error: "Method not allowed" }, 405);
}

export async function readJson(req) {
  try {
    return await req.json();
  } catch (error) {
    return {};
  }
}
