import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function NewsSection() {
  const news = await prisma.news.findMany({
    take: 3, // Chỉ lấy 3 tin mới nhất
    orderBy: { createdAt: 'desc' }
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest">Tin tức nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-200">
                <img src={item.image || "/api/placeholder/400/200"} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 line-clamp-2 hover:text-red-600 transition">{item.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4">{item.content}</p>
                <Link href={`/news/${item.slug}`} className="text-red-600 font-semibold text-sm hover:underline">
                  Đọc tiếp →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}