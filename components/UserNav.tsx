"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserCircle, ChevronDown, LogOut, Settings, ShieldCheck } from "lucide-react";
import { signOut } from "next-auth/react";

type UserNavSession = {
  user?: {
    image?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
  } | null;
} | null;

export default function UserNav({ session }: { session: UserNavSession }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isAdmin = session?.user?.role === "ADMIN" || session?.user?.email === "admin@carshop.com";

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-1.5 rounded-full p-1 outline-none transition hover:bg-gray-50"
      >
        {session?.user?.image ? (
          <Image src={session.user.image} alt="Avatar" width={36} height={36} className="rounded-full border-2 border-red-500" />
        ) : (
          <UserCircle className="h-9 w-9 text-gray-500" />
        )}
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
          {session ? (
            <div className="space-y-1">
              <div className="mb-1 border-b border-gray-50 px-4 py-2">
                <p className="text-[10px] font-bold uppercase text-gray-400">Xin chào</p>
                <p className="truncate text-sm font-black text-gray-800">{session.user?.name || session.user?.email}</p>
              </div>
              {isAdmin && (
                <Link href="/admin/cars" className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50">
                  <ShieldCheck size={16} /> Quản lý hệ thống
                </Link>
              )}
              <Link href="/profile" className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-600">
                <Settings size={16} /> Trang cá nhân
              </Link>
              <button onClick={() => signOut()} className="flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                <LogOut size={16} /> Đăng xuất
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              <Link href="/login" className="block rounded-lg px-4 py-2.5 text-sm font-bold text-gray-700 transition hover:bg-red-50 hover:text-red-600">
                Đăng nhập
              </Link>
              <Link href="/register" className="block rounded-lg px-4 py-2.5 text-sm font-bold text-gray-700 transition hover:bg-red-50 hover:text-red-600">
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
