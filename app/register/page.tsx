"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Eye, EyeOff, Car, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  
  // 1. Quản lý State cho Form
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 2. Hàm xử lý Đăng ký
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Có thể dùng thư viện toast để đẹp hơn, ở đây dùng alert đơn giản
        alert("Đăng ký thành công!");
        router.push("/login"); // Chuyển hướng sang trang đăng nhập
      } else {
        setError(data.message || "Đã có lỗi xảy ra");
      }
    } catch (err) {
      setError("Không thể kết nối đến máy chủ");
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
            Tạo tài khoản
          </h2>
          <p className="text-gray-500 mt-2 text-sm">Gia nhập cộng đồng CARSHOP ngay hôm nay</p>
        </div>

        {/* Thông báo lỗi nếu có */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Input Họ tên */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Họ và tên</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="text" 
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" 
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="email" 
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" 
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Input Mật khẩu */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Mật khẩu</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" 
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

          {/* Nút Đăng ký */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 uppercase tracking-wider flex items-center justify-center gap-2 disabled:bg-red-400"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Đang xử lý...
              </>
            ) : (
              "Đăng ký ngay"
            )}
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