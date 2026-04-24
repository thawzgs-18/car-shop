import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [cars, pendingCars, users, orders, news] = await Promise.all([
    prisma.car.count(),
    prisma.car.count({ where: { adminStatus: "pending" } }),
    prisma.user.count(),
    prisma.order.count(),
    prisma.news.count(),
  ]);

  const stats = [
    { label: "Tổng số xe", value: cars.toString() },
    { label: "Xe chờ duyệt", value: pendingCars.toString() },
    { label: "Người dùng", value: users.toString() },
    { label: "Yêu cầu khách", value: orders.toString() },
    { label: "Bài viết", value: news.toString() },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
          <p className="mt-3 text-4xl font-black text-slate-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
