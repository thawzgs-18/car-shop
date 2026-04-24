import prisma from "@/lib/prisma";
import AdminNewsManager from "@/app/components/admin/AdminNewsManager";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const news = await prisma.news.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return <AdminNewsManager news={news} />;
}
