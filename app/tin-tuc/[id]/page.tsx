import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { FALLBACK_NEWS } from "@/lib/news-data";

export const dynamic = "force-dynamic";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const dbNews = await prisma.news.findFirst({
    where: {
      OR: [{ id }, { slug: id }],
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  }).catch(() => null);

  const news = dbNews
    ? {
        title: dbNews.title,
        content: dbNews.content,
        image: dbNews.image || FALLBACK_NEWS[0].image,
        author: dbNews.author?.name || "Ban biên tập CarShop",
        createdAt: dbNews.createdAt.toISOString(),
      }
    : (() => {
        const fallback = FALLBACK_NEWS.find((item) => item.id === id || item.slug === id);
        if (!fallback) return null;
        return {
          title: fallback.title,
          content: fallback.content,
          image: fallback.image,
          author: fallback.authorName,
          createdAt: fallback.createdAt,
        };
      })();

  if (!news) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">
          {news.image && (
            <div className="h-80 bg-slate-200">
              <img src={news.image} alt={news.title} className="h-full w-full object-cover" />
            </div>
          )}
          <div className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
              {new Date(news.createdAt).toLocaleDateString("vi-VN")}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900">{news.title}</h1>
            <p className="mt-3 text-sm font-semibold text-slate-500">{news.author}</p>
            <div className="prose prose-slate mt-8 max-w-none whitespace-pre-line text-slate-700">
              {news.content}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
