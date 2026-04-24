"use client";

import type { CarListing } from "@/lib/car-types";

interface SidebarProps {
  cars: CarListing[];
  onTypeChange: (type: string) => void;
  activeType: string;
}

export default function Sidebar({ cars, onTypeChange, activeType }: SidebarProps) {
  const categories = ["Tất cả", ...new Set(cars.map((car) => car.type))];

  return (
    <div className="mb-8 w-full">
      <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
        <span className="h-5 w-1 rounded-full bg-red-600" />
        Dòng xe phổ biến
      </h3>

      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onTypeChange(cat)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              activeType === cat
                ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-100"
                : "border-slate-200 bg-white text-slate-700 hover:border-red-600 hover:text-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
