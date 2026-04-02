// components/Header.tsx
import Link from "next/link";
import { Car } from "lucide-react"; // Giả sử bạn dùng lucide cho logo

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Link về trang chủ */}
        <Link href="/" className="flex items-center gap-2 group">
          <Car className="text-red-600 w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-red-600 tracking-tighter">CARSHOP</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/mua-xe" className="font-bold hover:text-red-600 transition">MUA XE</Link>
          <Link href="/ban-xe" className="font-bold hover:text-red-600 transition">BÁN XE</Link>
          <Link href="/tin-tuc" className="font-bold hover:text-red-600 transition">TIN TỨC</Link>
        </nav>

        <div className="flex items-center gap-4">
           <button className="font-semibold text-gray-700">Đăng nhập</button>
           <button className="bg-red-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-red-700 transition shadow-lg shadow-red-200">
             + Đăng tin
           </button>
        </div>
      </div>
    </header>
  );
}