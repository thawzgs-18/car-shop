"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Car, Loader2, Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  
  // 1. Khai báo các State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 2. Hàm xử lý đăng nhập bằng Email/Password
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Đăng nhập thành công
        alert("Đăng nhập thành công! Chào mừng trở lại.");
        router.push("/"); // Chuyển hướng về trang chủ
        router.refresh(); // Làm mới dữ liệu trang
      } else {
        // Hiển thị lỗi từ server (Email không tồn tại, sai mật khẩu...)
        setError(data.message || "Đăng nhập thất bại");
      }
    } catch (err) {
      setError("Lỗi kết nối đến hệ thống.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-red-50 p-3 rounded-2xl">
              <Car className="text-red-600 w-10 h-10" />
            </div>
          </div>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic">
            Chào mừng trở lại
          </h2>
          <p className="text-gray-500 mt-2 text-sm">Đăng nhập để quản lý tin đăng của bạn</p>
        </div>

        {/* Hiển thị lỗi nếu có */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1 text-left">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="email" 
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" 
                placeholder="example@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
              <input 
                type={showPassword ? "text" : "password"} 
                required
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Nút Đăng nhập chính */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 uppercase tracking-wider flex items-center justify-center gap-2 disabled:bg-red-400"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Đang kiểm tra...
              </>
            ) : (
              "Đăng nhập"
            )}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Hoặc</span></div>
          </div>

          {/* Nút Đăng nhập bằng Google */}
          <button 
            type="button"
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm border-b-2 active:border-b-0 active:translate-y-[2px]"
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