import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_34%),linear-gradient(135deg,_#7f1d1d,_#ef4444_48%,_#f97316)] pt-18 pb-28 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(15,23,42,0.12)_45%,rgba(15,23,42,0.55)_100%)]" />
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="container relative z-10 mx-auto grid gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
            CarShop Vietnam
          </p>
          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Chọn đúng xe,
            <span className="block text-amber-200">chốt nhanh giao dịch.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
            Sàn giao dịch ô tô tập trung xe đã kiểm duyệt, thông tin rõ ràng, quy trình mua bán minh bạch
            và đội ngũ hỗ trợ thật sự theo sát từ lúc xem xe đến khi sang tên.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/xe"
              className="rounded-full bg-slate-950 px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-900"
            >
              Xem kho xe
            </Link>
            <Link
              href="/ban-xe"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur transition hover:bg-white/20"
            >
              Đăng bán xe
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur">
            <div className="text-sm uppercase tracking-[0.3em] text-white/60">Kiểm định</div>
            <div className="mt-3 text-3xl font-black">100%</div>
            <p className="mt-2 text-sm text-white/80">Xe hiển thị công khai đều qua bước lọc và duyệt nội dung.</p>
          </div>
          <div className="rounded-[28px] border border-white/15 bg-slate-950/35 p-6 backdrop-blur">
            <div className="text-sm uppercase tracking-[0.3em] text-white/60">Hỗ trợ</div>
            <div className="mt-3 text-3xl font-black">24/7</div>
            <p className="mt-2 text-sm text-white/80">Tư vấn tài chính, định giá và thủ tục sang tên trên cùng một luồng.</p>
          </div>
          <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur">
            <div className="text-sm uppercase tracking-[0.3em] text-white/60">Dữ liệu</div>
            <div className="mt-3 text-3xl font-black">Minh bạch</div>
            <p className="mt-2 text-sm text-white/80">Thông số, mô tả, vị trí và tình trạng xe được chuẩn hóa theo cùng mẫu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
