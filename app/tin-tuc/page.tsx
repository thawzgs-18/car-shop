import Link from "next/link";
import prisma from "@/lib/prisma";
import { FALLBACK_NEWS } from "@/lib/news-data";

export const dynamic = "force-dynamic";

export default async function TinTucPage() {
  const news = await prisma.news.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
    orderBy: { createdAt: "desc" },
  }).catch(() => []);

  const mappedDbNews = news.map((item) => ({
        id: item.id,
        title: item.title,
        excerpt: item.content,
        image: item.image || FALLBACK_NEWS[0].image,
        author: item.author?.name || "Ban biên tập CarShop",
        createdAt: item.createdAt.toISOString(),
      }));

  const mappedFallbackNews = FALLBACK_NEWS.map((item) => ({
    id: item.slug,
    title: item.title,
    excerpt: item.content,
    image: item.image,
    author: item.authorName,
    createdAt: item.createdAt,
  }));

  const existingTitles = new Set(mappedDbNews.map((item) => item.title.toLowerCase()));
  const newsList = [...mappedDbNews, ...mappedFallbackNews.filter((item) => !existingTitles.has(item.title.toLowerCase()))];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black uppercase tracking-tighter text-slate-900">Tin tức & đánh giá xe</h1>
          <p className="mx-auto max-w-2xl text-slate-500">
            Cập nhật thông tin mới về thị trường ô tô, đánh giá xe chuyên sâu và kinh nghiệm mua bán thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {newsList.map((item) => (
            <Link key={item.id} href={`/tin-tuc/${item.id}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-56 bg-slate-200">
                <img src={item.image || ""} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
                  {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                </p>
                <h2 className="mt-3 line-clamp-2 text-2xl font-black text-slate-900 transition group-hover:text-red-600">
                  {item.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                <p className="mt-5 text-sm font-semibold text-slate-500">{item.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
