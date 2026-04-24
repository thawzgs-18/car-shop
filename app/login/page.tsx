"use client";

import Link from "next/link";
import { Mail, Lock, Car } from "lucide-react";
import { signIn } from "next-auth/react"; // Import từ next-auth/react cho Client Component

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Car className="text-red-600 w-12 h-12" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Chào mừng trở lại</h2>
          <p className="text-gray-500 mt-2 text-sm">Đăng nhập để quản lý tin đăng của bạn</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1 text-left">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input type="email" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="example@gmail.com" />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-bold text-gray-700">Mật khẩu</label>
              <Link href="#" className="text-xs text-red-600 hover:underline font-semibold">Quên mật khẩu?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input type="password" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="••••••••" />
            </div>
          </div>

          {/* Nút Đăng nhập chính */}
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 uppercase tracking-wider">
            Đăng nhập
          </button>

          {/* THÊM NÚT GOOGLE NGAY DƯỚI ĐÂY */}
          <button 
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full mt-4 flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm border-b-2 active:border-b-0 active:translate-y-[2px]"
          >
            <img src="https://authjs.dev/img/providers/google.svg" alt="Google" width={20} height={20} />
            Đăng nhập bằng tài khoản Google
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500">
          Chưa có tài khoản?{" "}
          <Link href="/register" className="text-red-600 font-bold hover:underline">Đăng ký thành viên</Link>
        </p>
      </div>
    </div>
  );
}