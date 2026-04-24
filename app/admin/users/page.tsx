import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">Quản lý người dùng</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b bg-slate-50">
            <tr>
              <th className="p-4 text-sm font-semibold text-slate-600">Người dùng</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Email</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Vai trò</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Ngày tham gia</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-4 font-medium text-slate-700">{user.name || "N/A"}</td>
                <td className="p-4 text-slate-600">{user.email}</td>
                <td className="p-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    user.role === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-500">{new Date(user.createdAt).toLocaleDateString("vi-VN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
