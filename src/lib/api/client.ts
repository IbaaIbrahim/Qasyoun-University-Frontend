import axios from "axios";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
  "https://api.qpu.buzz";

/** Absolute URL for API-hosted uploads (paths like `/uploads/...`). */
export function resolveUploadSrc(
  path: string | null | undefined,
  fallback: string,
): string {
  const p = path?.trim();
  if (!p) return fallback;
  if (p.toLowerCase().startsWith("http")) return p;
  return `${API_BASE_URL}${p.startsWith("/") ? "" : "/"}${p}`;
}

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    dev: "true",
  },
  timeout: 60_000,
});
