import Link from "next/link";
import { ArrowRight, BadgeCheck, Banknote, ShieldCheck, Sparkles } from "lucide-react";
import Banner from "./components/Banner";
import HomeInventory from "./components/HomeInventory";
import CarCard from "./components/CarCard";
import { getApprovedCars, getFeaturedCars } from "@/lib/car-data";

export default async function Home() {
  const [cars, featuredCars] = await Promise.all([getApprovedCars(), getFeaturedCars(3)]);
  const brands = new Set(cars.map((car) => car.brand)).size;
  const types = new Set(cars.map((car) => car.type)).size;
  const newestYear = cars.reduce((maxYear, car) => Math.max(maxYear, car.year), 0);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fff7ed_0%,_#ffffff_24%,_#f8fafc_100%)] pb-8">
      <Banner />

      <section className="container mx-auto grid gap-4 px-4 py-10 md:grid-cols-3">
        <div className="rounded-[28px] border border-white bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Kho xe</p>
          <p className="mt-3 text-4xl font-black text-slate-900">{cars.length}+</p>
          <p className="mt-2 text-sm text-slate-500">Tin đăng đang hiển thị, đồng bộ giữa trang chủ và trang danh sách xe.</p>
        </div>
        <div className="rounded-[28px] border border-white bg-slate-950 p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Đa dạng</p>
          <p className="mt-3 text-4xl font-black">{brands} hãng</p>
          <p className="mt-2 text-sm text-white/70">{types} nhóm xe từ sedan, SUV, pickup đến xe điện.</p>
        </div>
        <div className="rounded-[28px] border border-white bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Đời xe</p>
          <p className="mt-3 text-4xl font-black text-slate-900">{newestYear || "Mới"}</p>
          <p className="mt-2 text-sm text-slate-500">Ưu tiên hiển thị các mẫu xe mới và xe chất lượng đã kiểm duyệt.</p>
        </div>
      </section>

      <HomeInventory cars={cars} />

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Nổi bật tuần này</p>
            <h2 className="text-3xl font-black text-slate-900">Đề xuất đáng xem</h2>
          </div>
          <Link href="/xe" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-900 transition hover:text-red-600">
            Xem toàn bộ <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[36px] bg-slate-950 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Vì sao chọn CarShop</p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em]">Tập trung vào chất lượng giao dịch, không chỉ số lượng tin đăng.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="text-red-400" />
              <h3 className="mt-4 text-lg font-bold">Dữ liệu rõ ràng</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">Thông tin xe, tình trạng sử dụng và thông số kỹ thuật được chuẩn hóa trước khi hiển thị.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <Banknote className="text-red-400" />
              <h3 className="mt-4 text-lg font-bold">Hỗ trợ tài chính</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">Tư vấn phương án mua xe, vay ngân hàng và cấu trúc thanh toán phù hợp ngân sách.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[36px] border border-slate-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Dành cho người bán</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900">Đăng tin nhanh, chờ duyệt gọn, tiếp cận đúng người mua.</h2>
          <div className="mt-8 space-y-4">
            {[
              "Mẫu đăng tin đồng nhất, điền đủ thông số trong một lần.",
              "Tin mới gửi được lưu về hệ thống với trạng thái chờ duyệt.",
              "Đội ngũ hỗ trợ liên hệ lại để xác nhận và tư vấn giá bán.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <BadgeCheck className="mt-0.5 shrink-0 text-red-600" size={18} />
                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
          <Link
            href="/ban-xe"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-red-700"
          >
            Đăng bán ngay <Sparkles size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
