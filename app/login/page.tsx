"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Car, Loader2, Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result?.error) {
        router.push("/");
        router.refresh();
      } else {
        setError("Email hoặc mật khẩu không chính xác.");
      }
    } catch {
      setError("Không thể kết nối đến hệ thống.");
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
            Chào mừng trở lại
          </h2>
          <p className="mt-2 text-sm text-gray-500">Đăng nhập để quản lý tin đăng và gửi xe mới lên hệ thống.</p>
        </div>

        {error && (
          <div className="mb-4 border-l-4 border-red-500 bg-red-50 p-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="mb-1 block text-left text-sm font-bold text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-10 outline-none transition focus:ring-2 focus:ring-red-500"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm font-bold text-gray-700">Mật khẩu</label>
              <Link href="#" className="text-xs font-semibold text-red-600 hover:underline">Quên mật khẩu?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-10 pl-10 outline-none transition focus:ring-2 focus:ring-red-500"
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

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-bold uppercase tracking-wider text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:bg-red-400"
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
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Hoặc</span></div>
          </div>

          <button
            type="button"
            onClick={() => signIn("google")}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 border-b-2 bg-white py-3 font-bold text-gray-700 shadow-sm transition hover:bg-gray-50 active:translate-y-[2px] active:border-b-0"
          >
            <img src="https://authjs.dev/img/providers/google.svg" alt="Google" width={20} height={20} />
            Đăng nhập bằng tài khoản Google
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Chưa có tài khoản?{" "}
          <Link href="/register" className="font-bold text-red-600 hover:underline">Đăng ký thành viên</Link>
        </p>
      </div>
    </div>
  );
}
