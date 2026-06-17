const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

console.log("API URL:", BASE_URL);

export async function apiPost(endpoint: string, body: object) {
    if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL is undefined.");

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Something went wrong");
    return data;
}

export async function apiPostAuth(endpoint: string, body: object) {
    if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL is undefined.");

    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Something went wrong");
    return data;
}

export async function apiGet(endpoint: string) {
    if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL is undefined.");

    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Something went wrong");
    return data;
}

export async function apiGetBlob(endpoint: string): Promise<Blob> {
    if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL is undefined.");

    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Failed to download");
    return res.blob();
}