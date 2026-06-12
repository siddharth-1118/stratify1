const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

console.log("API URL:", BASE_URL);

export async function apiPost(endpoint: string, body: object) {
  if (!BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is undefined. Check your .env.local file."
    );
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail || "Something went wrong");
  }

  return data;
}