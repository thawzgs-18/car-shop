"use client";

import { useState, useTransition } from "react";

interface AdminNewsManagerProps {
  news: Array<{
    id: string;
    title: string;
    slug: string;
    image: string | null;
    content: string;
    createdAt: string | Date;
    author?: { name: string | null } | null;
  }>;
}

const initialForm = {
  title: "",
  slug: "",
  image: "",
  content: "",
};

export default function AdminNewsManager({ news: initialNews }: AdminNewsManagerProps) {
  const [news, setNews] = useState(initialNews);
  const [form, setForm] = useState(initialForm);
  const [isPending, startTransition] = useTransition();

  function submitNews(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(async () => {
      const res = await fetch("/api/admin/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) return;
      const created = await res.json();
      setNews((prev) => [created, ...prev]);
      setForm(initialForm);
    });
  }

  function deleteNews(id: string) {
    startTransition(async () => {
      const res = await fetch("/api/admin/news", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) return;
      setNews((prev) => prev.filter((item) => item.id !== id));
    });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={submitNews} className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-slate-800">Tạo tin tức mới</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            required
            value={form.title}
            onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
            placeholder="Tiêu đề"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
          />
          <input
            required
            value={form.slug}
            onChange={(event) => setForm((prev) => ({ ...prev, slug: event.target.value }))}
            placeholder="Slug"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
          />
          <input
            value={form.image}
            onChange={(event) => setForm((prev) => ({ ...prev, image: event.target.value }))}
            placeholder="Link ảnh"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none md:col-span-2"
          />
          <textarea
            required
            rows={6}
            value={form.content}
            onChange={(event) => setForm((prev) => ({ ...prev, content: event.target.value }))}
            placeholder="Nội dung bài viết"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none md:col-span-2"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="mt-4 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white"
        >
          Đăng bài
        </button>
      </form>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-slate-800">Danh sách tin tức</h2>
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-200 p-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.slug}</p>
                  <p className="mt-3 line-clamp-3 text-sm text-slate-600">{item.content}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">
                    {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                  </div>
                  <button
                    disabled={isPending}
                    onClick={() => deleteNews(item.id)}
                    className="mt-3 rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white"
                  >
                    Xóa bài
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
