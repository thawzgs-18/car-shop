"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import CarCard from "./CarCard";
import type { CarListing } from "@/lib/car-types";

interface HomeInventoryProps {
  cars: CarListing[];
}

export default function HomeInventory({ cars }: HomeInventoryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Tất cả");
  const [selectedPrice, setSelectedPrice] = useState("Tất cả");
  const [selectedType, setSelectedType] = useState("Tất cả");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === "Tất cả" || car.brand === selectedBrand;
      const matchesType = selectedType === "Tất cả" || car.type === selectedType;

      let matchesPrice = true;
      if (selectedPrice === "Dưới 500 triệu") matchesPrice = car.price < 500000000;
      else if (selectedPrice === "500 triệu - 1 tỷ") {
        matchesPrice = car.price >= 500000000 && car.price <= 1000000000;
      } else if (selectedPrice === "Trên 1 tỷ") {
        matchesPrice = car.price > 1000000000;
      }

      return matchesSearch && matchesBrand && matchesType && matchesPrice;
    });
  }, [cars, searchTerm, selectedBrand, selectedPrice, selectedType]);

  return (
    <section className="relative">
      <SearchBar
        cars={cars}
        onSearchChange={setSearchTerm}
        onBrandChange={setSelectedBrand}
        onPriceChange={setSelectedPrice}
      />
      <div className="container mx-auto px-4 py-10">
        <Sidebar cars={cars} activeType={selectedType} onTypeChange={setSelectedType} />
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Kho xe</p>
            <h2 className="text-3xl font-black text-slate-900">Xe đang mở bán</h2>
          </div>
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
            {filteredCars.length} xe phù hợp
          </div>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white px-8 py-16 text-center">
            <p className="text-lg font-bold text-slate-900">Chưa có mẫu xe phù hợp bộ lọc hiện tại.</p>
            <p className="mt-2 text-sm text-slate-500">Thử đổi hãng xe, dòng xe hoặc mức giá để xem thêm lựa chọn.</p>
          </div>
        )}
      </div>
    </section>
  );
}
