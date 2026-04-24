"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Eye, EyeOff, Car, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        router.push("/login");
      } else {
        setError(data.message || "Đã có lỗi xảy ra");
      }
    } catch {
      setError("Không thể kết nối đến máy chủ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,_#fff7ed_0%,_#f8fafc_100%)] px-4 py-12">
      <div className="w-full max-w-md rounded-[32px] border border-gray-100 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-2xl bg-red-50 p-3">
              <Car className="h-10 w-10 text-red-600" />
            </div>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
            Tạo tài khoản
          </h2>
          <p className="mt-2 text-sm text-gray-500">Gia nhập cộng đồng CarShop để đăng bán và quản lý tin xe dễ hơn.</p>
        </div>

        {error && (
          <div className="mb-4 border-l-4 border-red-500 bg-red-50 p-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-bold text-gray-700">Họ và tên</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-10 outline-none transition focus:ring-2 focus:ring-red-500"
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-10 outline-none transition focus:ring-2 focus:ring-red-500"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold text-gray-700">Mật khẩu</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-10 pl-10 outline-none transition focus:ring-2 focus:ring-red-500"
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

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-bold uppercase tracking-wider text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:bg-red-400"
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

        <p className="mt-6 text-center text-sm text-gray-500">
          Đã có tài khoản?{" "}
          <Link href="/login" className="font-bold text-red-600 hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}
