import "./globals.css";
import { Car, User, PlusCircle } from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="antialiased bg-gray-50 text-gray-900">
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-red-600 font-bold text-2xl">
              <Car size={32} /> <span>CARSHOP</span>
            </div>
            <nav className="hidden md:flex gap-8 font-semibold text-gray-600 uppercase text-xs tracking-widest">
              <a href="/" className="hover:text-red-600 transition">Mua xe</a>
              <a href="#" className="hover:text-red-600 transition">Bán xe</a>
              <a href="#" className="hover:text-red-600 transition">Tin tức</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 font-medium hover:text-red-600 flex items-center gap-1">
                <User size={18} /> Đăng nhập
              </button>
              <button className="bg-red-600 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition">
                + Đăng tin
              </button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-950 text-gray-400 py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white font-bold mb-4">CARSHOP MARKETPLACE</p>
            <p className="text-sm">© 2026 Hệ thống mua bán ô tô số 1 Việt Nam</p>
          </div>
        </footer>
      </body>
    </html>
  );
}