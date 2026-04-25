type SessionLike = {
  user?: {
    role?: string | null;
    email?: string | null;
  } | null;
} | null;

const ADMIN_EMAILS = new Set(["admin@carshop.com", "thang18012005@gmail.com"]);

export function isAdminEmail(email?: string | null) {
  return !!email && ADMIN_EMAILS.has(email);
}

export function isAdminSession(session: SessionLike) {
  return session?.user?.role === "ADMIN" || isAdminEmail(session?.user?.email);
}
