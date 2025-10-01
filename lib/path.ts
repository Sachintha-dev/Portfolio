export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return path;
  // If path is already absolute with protocol, leave as-is
  if (/^https?:\/\//i.test(path)) return path;
  // Ensure leading slash on input
  const normalized = path.startsWith("/") ? path : `/${path}`;
  // Avoid double prefixing
  if (base && normalized.startsWith(`${base}/`)) return normalized;
  return `${base}${normalized}`;
}


