"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserCircle, ChevronDown, LogOut, Settings } from "lucide-react";
import { signOut } from "next-auth/react";
import { ShieldCheck } from 'lucide-react';

export default function UserNav({ session }: { session: any }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isAdmin = session?.user?.email === "thang18012005@gmail.com";

  return (
    <div className="relative">
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-1.5 p-1 rounded-full hover:bg-gray-50 transition outline-none"
      >
        {session?.user?.image ? (
          <Image 
            src={session.user.image} 
            alt="Avatar" 
            width={36} 
            height={36} 
            className="rounded-full border-2 border-red-500"
          />
        ) : (
          <UserCircle className="text-gray-500 w-9 h-9" />
        )}
        <ChevronDown className={`text-gray-400 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50">
          {session ? (
            // Nội dung khi ĐÃ ĐĂNG NHẬP
            <div className="space-y-1">
              <div className="px-4 py-2 border-b border-gray-50 mb-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Xin chào</p>
                <p className="text-sm font-black text-gray-800 truncate">{session.user.name}</p>
              </div>
              {isAdmin && (
            <Link 
              href="/admin/cars" 
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-blue-600 rounded-lg hover:bg-blue-50 transition"
              onClick={() => setIsDropdownOpen(false)}
            >
              <ShieldCheck size={16} /> Quản lý hệ thống
            </Link>
          )}
              <Link 
                href="/profile" 
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                <Settings size={16} /> Trang cá nhân
              </Link>
              <button 
                onClick={() => signOut()}
                className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-red-600 rounded-lg hover:bg-red-50 transition"
              >
                <LogOut size={16} /> Đăng xuất
              </button>
            </div>
          ) : (
            // QUAY LẠI NHƯ CŨ KHI CHƯA ĐĂNG NHẬP
            <div className="space-y-1">
              <Link 
                href="/login" 
                className="block px-4 py-2.5 text-sm font-bold text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                Đăng Nhập
              </Link>
              <Link 
                href="/register" 
                className="block px-4 py-2.5 text-sm font-bold text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                Đăng Ký
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}