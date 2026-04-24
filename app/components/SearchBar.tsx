"use client";

import { Search } from "lucide-react";
import type { CarListing } from "@/lib/car-types";

interface SearchBarProps {
  cars: CarListing[];
  onSearchChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

export default function SearchBar({
  cars,
  onSearchChange,
  onBrandChange,
  onPriceChange,
}: SearchBarProps) {
  const brands = [...new Set(cars.map((car) => car.brand))].sort((a, b) => a.localeCompare(b, "vi"));

  return (
    <div className="container relative z-30 mx-auto -mt-14 px-4">
      <div className="rounded-[32px] border border-white/50 bg-white/90 p-4 shadow-[0_28px_70px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Tìm theo tên xe hoặc phiên bản"
              className="w-full rounded-2xl border border-transparent bg-slate-100/80 py-4 pr-4 pl-11 text-sm font-medium outline-none transition-all focus:border-red-500 focus:bg-white"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          <select
            className="w-full cursor-pointer rounded-2xl border border-transparent bg-slate-100/80 px-4 py-4 text-sm font-semibold outline-none transition-all focus:border-red-500 focus:bg-white"
            onChange={(e) => onBrandChange(e.target.value)}
          >
            <option value="Tất cả">Tất cả hãng xe</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select
            className="w-full cursor-pointer rounded-2xl border border-transparent bg-slate-100/80 px-4 py-4 text-sm font-semibold outline-none transition-all focus:border-red-500 focus:bg-white"
            onChange={(e) => onPriceChange(e.target.value)}
          >
            <option value="Tất cả">Mọi mức giá</option>
            <option value="Dưới 500 triệu">Dưới 500 triệu</option>
            <option value="500 triệu - 1 tỷ">500 triệu - 1 tỷ</option>
            <option value="Trên 1 tỷ">Trên 1 tỷ</option>
          </select>

          <button className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-bold text-white shadow-lg shadow-red-200 transition-colors hover:bg-red-700">
            <Search size={20} />
            TÌM XE NGAY
          </button>
        </div>
      </div>
    </div>
  );
}
