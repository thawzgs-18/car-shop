"use client";
import { useState, useMemo } from "react";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import CarCard from "./components/CarCard";
import { CARS } from "./data/cars";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Tất cả");
  const [selectedPrice, setSelectedPrice] = useState("Tất cả");
  const [selectedType, setSelectedType] = useState("Tất cả"); // Thêm state này

  const filteredCars = useMemo(() => {
    return CARS.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === "Tất cả" || car.brand === selectedBrand;
      const matchesType = selectedType === "Tất cả" || car.type === selectedType; // Lọc theo loại xe
      
      // Logic lọc giá (giữ nguyên của bạn)
      let matchesPrice = true;
      if (selectedPrice === "Dưới 500 triệu") matchesPrice = car.price < 500000000;
      else if (selectedPrice === "500 triệu - 1 tỷ") matchesPrice = car.price >= 500000000 && car.price <= 1000000000;
      else if (selectedPrice === "Trên 1 tỷ") matchesPrice = car.price > 1000000000;

      return matchesSearch && matchesBrand && matchesPrice && matchesType;
    });
  }, [searchTerm, selectedBrand, selectedPrice, selectedType]);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Banner />
      <SearchBar 
        onSearchChange={setSearchTerm} 
        onBrandChange={setSelectedBrand}
        onPriceChange={setSelectedPrice}
      />
      <div className="container mx-auto px-4 py-10">
        {/* Truyền props vào Sidebar */}
        <Sidebar onTypeChange={setSelectedType} activeType={selectedType} />
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}