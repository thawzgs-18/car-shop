import prisma from "@/lib/prisma";
import AdminCarsManager from "@/app/components/admin/AdminCarsManager";

export const dynamic = "force-dynamic";

export default async function AdminCarsPage() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <AdminCarsManager cars={cars} />;
}
