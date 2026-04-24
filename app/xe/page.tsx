import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CarCard from "@/app/components/CarCard";
import { getApprovedCars } from "@/lib/car-data";

export const dynamic = "force-dynamic";

export default async function CarsPage() {
  const cars = await getApprovedCars();

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[linear-gradient(135deg,_#111827,_#1f2937_45%,_#7f1d1d)] py-16 text-white">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Kho xe CarShop</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase tracking-[-0.05em]">Danh sách xe đang mở bán</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
            Toàn bộ xe hiển thị tại đây đều lấy từ cùng một nguồn dữ liệu của hệ thống, ưu tiên xe đã được kiểm
            duyệt và sắp xếp theo tin mới nhất.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
            {cars.length} xe đang hiển thị
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Đã duyệt</p>
            <h2 className="text-3xl font-black text-slate-900">Kho xe mới nhất</h2>
          </div>
          <Link href="/ban-xe" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-900 transition hover:text-red-600">
            Đăng xe của bạn <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}
