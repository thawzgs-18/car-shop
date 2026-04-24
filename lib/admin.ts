type SessionLike = {
  user?: {
    role?: string | null;
    email?: string | null;
  } | null;
} | null;

export function isAdminSession(session: SessionLike) {
  return session?.user?.role === "ADMIN" || session?.user?.email === "admin@carshop.com";
}
