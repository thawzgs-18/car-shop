import Link from "next/link";
import { Car } from "lucide-react";
import { auth } from "@/auth"; // Lấy session phía Server
import UserNav from "./UserNav"; // Component xử lý Dropdown

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Car className="text-red-600 w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-red-600 tracking-tighter uppercase">CARSHOP</span>
        </Link>

        {/* Menu điều hướng chính */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/gioi-thieu" className="font-bold text-gray-800 hover:text-red-600 transition text-sm uppercase">Giới thiệu</Link>
          <Link href="/ban-xe" className="font-bold text-gray-800 hover:text-red-600 transition text-sm uppercase">Bán xe</Link>
          <Link href="/tin-tuc" className="font-bold text-gray-800 hover:text-red-600 transition text-sm uppercase">Tin tức</Link>
        </nav>

        {/* Khu vực góc phải: Truyền session vào UserNav */}
        <div className="flex items-center">
           <UserNav session={session} />
        </div>

      </div>
    </header>
  );
}