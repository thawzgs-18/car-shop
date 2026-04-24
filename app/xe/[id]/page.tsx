import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Fuel, Gauge, MapPin, Settings2 } from "lucide-react";
import { getApprovedCars, getCarById } from "@/lib/car-data";
import CarInquiryForm from "@/app/components/CarInquiryForm";

export const dynamic = "force-dynamic";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await getCarById(id);

  if (!car) {
    notFound();
  }

  const relatedCars = (await getApprovedCars()).filter((item) => item.id !== car.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="container mx-auto px-4 py-8">
        <Link href="/xe" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 transition hover:text-red-600">
          <ArrowLeft size={16} />
          Quay lại kho xe
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">
            <div className="aspect-[16/10] bg-slate-200">
              <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="rounded-[36px] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">{car.brand}</p>
            <h1 className="mt-3 text-4xl font-black text-slate-900">{car.name}</h1>
            <p className="mt-4 text-4xl font-black text-red-600">{car.price.toLocaleString("vi-VN")} đ</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Calendar size={16} />
                  Năm sản xuất
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">{car.year}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Gauge size={16} />
                  Số km
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">{car.km.toLocaleString("vi-VN")} km</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Fuel size={16} />
                  Nhiên liệu
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">{car.fuel}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Settings2 size={16} />
                  Hộp số
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">{car.transmission}</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />
              <span>{car.location}</span>
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Tình trạng</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{car.status}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{car.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 pb-14 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Thông số nổi bật</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Động cơ</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{car.engine}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Dòng xe</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{car.type}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Trang bị</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {car.features.map((feature) => (
                <span key={feature} className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <CarInquiryForm carId={car.id} carName={car.name} />
      </section>

      {relatedCars.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Có thể bạn cũng thích</p>
            <h2 className="text-3xl font-black text-slate-900">Mẫu xe liên quan</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedCars.map((relatedCar) => (
              <Link
                key={relatedCar.id}
                href={`/xe/${relatedCar.id}`}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] bg-slate-200">
                  <img src={relatedCar.image} alt={relatedCar.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{relatedCar.brand}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{relatedCar.name}</h3>
                  <p className="mt-3 text-lg font-black text-red-600">{relatedCar.price.toLocaleString("vi-VN")} đ</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
