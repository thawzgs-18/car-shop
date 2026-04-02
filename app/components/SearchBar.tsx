"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  onSearchChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

export default function SearchBar({ 
  onSearchChange, 
  onBrandChange, 
  onPriceChange 
}: SearchBarProps) {
  
  // Danh sách các hãng xe thực tế có trong dữ liệu CARS của bạn
  const brands = [
    "Toyota", "Hyundai", "Honda", "Mazda", "Kia", 
    "Mitsubishi", "Ford", "Mercedes-Benz", "BMW", 
    "Audi", "Lexus", "Porsche", "Volvo", "Land Rover", 
    "VinFast", "Tesla", "Volkswagen", "Subaru", 
    "Peugeot", "Mini", "Jeep"
  ];

  return (
    <div className="container mx-auto px-4 -mt-10 relative z-30">
      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          
          {/* 1. Ô tìm kiếm theo tên */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Nhập tên xe bạn cần tìm..."
              className="w-full bg-gray-50 pl-11 pr-4 py-4 outline-none rounded-xl text-sm font-medium border border-transparent focus:border-red-500 focus:bg-white transition-all"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* 2. Lọc theo hãng xe */}
          <select 
            className="w-full bg-gray-50 px-4 py-4 outline-none rounded-xl text-sm font-semibold border border-transparent focus:border-red-500 focus:bg-white transition-all appearance-none cursor-pointer"
            onChange={(e) => onBrandChange(e.target.value)}
          >
            <option value="Tất cả">Tất cả hãng xe</option>
            {brands.sort().map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          {/* 3. Lọc theo khoảng giá */}
          <select 
            className="w-full bg-gray-50 px-4 py-4 outline-none rounded-xl text-sm font-semibold border border-transparent focus:border-red-500 focus:bg-white transition-all appearance-none cursor-pointer"
            onChange={(e) => onPriceChange(e.target.value)}
          >
            <option value="Tất cả">Mọi mức giá</option>
            <option value="Dưới 500 triệu">Dưới 500 triệu</option>
            <option value="500 triệu - 1 tỷ">500 triệu - 1 tỷ</option>
            <option value="Trên 1 tỷ">Trên 1 tỷ</option>
          </select>

          {/* 4. Nút Tìm kiếm (Để trang trí hoặc kích hoạt lọc nhanh) */}
          <button className="bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors py-4 flex items-center justify-center gap-2 shadow-lg shadow-red-200">
            <Search size={20} />
            TÌM KIẾM NGAY
          </button>

        </div>
      </div>
    </div>
  );
}