import prisma from "@/lib/prisma";
import AdminOrdersManager from "@/app/components/admin/AdminOrdersManager";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: { car: true },
    orderBy: { createdAt: "desc" },
  });

  return <AdminOrdersManager orders={orders} />;
}
