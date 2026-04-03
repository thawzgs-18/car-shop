"use client";

import Link from "next/link";
import { User, Mail, Lock, EyeOff, Car } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Car className="text-red-600 w-12 h-12" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Tạo tài khoản</h2>
          <p className="text-gray-500 mt-2 text-sm">Gia nhập cộng đồng CARSHOP ngay hôm nay</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Họ và tên</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Nguyễn Văn A" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input type="email" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="example@gmail.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Mật khẩu</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input type="password" className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="••••••••" />
              <EyeOff className="absolute right-3 top-3 text-gray-400 cursor-pointer" size={18} />
            </div>
          </div>

          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 uppercase tracking-wider">
            Đăng ký ngay
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          Đã có tài khoản?{" "}
          <Link href="/login" className="text-red-600 font-bold hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}