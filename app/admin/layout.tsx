import { redirect } from "next/navigation";
import Sidebar from "@/app/components/admin/Sidebar";
import { auth } from "@/auth";
import { isAdminSession } from "@/lib/admin";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (!isAdminSession(session)) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8 flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Hệ thống quản trị</h1>
            <p className="mt-1 text-sm text-slate-500">Quản lý xe, yêu cầu khách hàng, tin tức và người dùng.</p>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Admin</div>
            <div className="font-semibold text-slate-800">{session.user.name || session.user.email}</div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
