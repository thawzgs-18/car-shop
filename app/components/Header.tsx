// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Car, UserCircle, ChevronDown } from "lucide-react"; 

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Car className="text-red-600 w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-red-600 tracking-tighter">CARSHOP</span>
        </Link>

        {/* Menu điều hướng chính */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/gioi-thieu" className="font-bold text-gray-800 hover:text-red-600 transition text-sm uppercase">Giới thiệu</Link>
          <Link href="/ban-xe" className="font-bold text-gray-800 hover:text-red-600 transition text-sm uppercase">Bán xe</Link>
          <Link href="/tin-tuc" className="font-bold text-gray-800 hover:text-red-600 transition text-sm uppercase">Tin tức</Link>
        </nav>

        {/* Khu vực góc phải: Chỉ giữ lại Avatar Dropdown */}
        <div className="flex items-center relative">
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="flex items-center gap-1.5 p-1 rounded-full hover:bg-gray-50 transition outline-none"
            >
              <UserCircle className="text-gray-500 w-9 h-9" />
              <ChevronDown className={`text-gray-400 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50">
                <div className="space-y-1">
                  <Link 
                    href="/login" 
                    className="block px-4 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Đăng Nhập
                  </Link>
                  <Link 
                    href="/register" 
                    className="block px-4 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Đăng Ký
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}