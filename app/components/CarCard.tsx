import { MapPin, Calendar, Gauge, Fuel, Settings2 } from "lucide-react";
import Link from "next/link";
import type { CarListing } from "@/lib/car-types";

interface CarProps {
  car: CarListing;
}

export default function CarCard({ car }: CarProps) {
  return (
    <Link
      href={`/xe/${car.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-56 overflow-hidden bg-slate-200">
        {car.image ? (
          <img
            src={car.image}
            alt={car.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-medium text-slate-400">
            No image
          </div>
        )}

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-800 shadow-sm backdrop-blur-sm">
          {car.status || "Sẵn có"}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {car.brand}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{car.type}</p>
            <h3 className="mt-1 line-clamp-2 text-lg font-bold text-slate-800 transition group-hover:text-red-600">
              {car.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Giá bán</p>
            <p className="mt-1 text-xl font-black text-red-600">{car.price.toLocaleString("vi-VN")} đ</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-4 text-[12px] font-medium text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-slate-400" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge size={14} className="text-slate-400" />
            <span>{car.km.toLocaleString("vi-VN")} km</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel size={14} className="text-slate-400" />
            <span className="line-clamp-1">{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings2 size={14} className="text-slate-400" />
            <span className="line-clamp-1">{car.transmission}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
          <MapPin size={15} className="text-slate-400" />
          <span className="line-clamp-1">{car.location}</span>
        </div>

        <div className="mt-5 inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] text-slate-900 transition group-hover:text-red-600">
          Xem chi tiết
        </div>
      </div>
    </Link>
  );
}
