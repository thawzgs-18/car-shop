import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import icon để trang web sinh động hơn
import { Car, User, Search, PlusCircle } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarShop - Marketplace Mua Bán Ô Tô Số 1",
  description: "Hệ thống mua bán xe hơi hiện đại, uy tín và nhanh chóng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* --- 1. HEADER (Thanh menu trên cùng) --- */}
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            
            {/* Logo bên trái */}
            <div className="flex items-center gap-2 text-red-600 font-extrabold text-2xl tracking-tighter cursor-pointer">
              <Car size={32} strokeWidth={3} />
              <span>CARSHOP</span>
            </div>

            {/* Menu giữa (Ẩn trên mobile) */}
            <nav className="hidden md:flex gap-8 font-semibold text-gray-600 uppercase text-sm">
              <a href="/" className="hover:text-red-600 transition">Mua xe</a>
              <a href="#" className="hover:text-red-600 transition">Bán xe</a>
              <a href="#" className="hover:text-red-600 transition">Tin tức</a>
              <a href="#" className="hover:text-red-600 transition">Đánh giá</a>
            </nav>

            {/* Nút bên phải */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 text-gray-700 font-medium hover:text-red-600 transition">
                <User size={20} />
                <span>Đăng nhập</span>
              </button>
              <button className="bg-red-600 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-red-700 transition shadow-lg shadow-red-200">
                <PlusCircle size={20} />
                <span>Đăng tin</span>
              </button>
            </div>
          </div>
        </header>

        {/* --- 2. MAIN CONTENT (Nội dung các trang sẽ hiện ở đây) --- */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* --- 3. FOOTER (Chân trang) --- */}
        <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-500 font-bold text-xl">
                <Car size={24} /> <span>CARSHOP</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nền tảng mua bán ô tô trực tuyến hàng đầu Việt Nam. Kết nối người bán và người mua nhanh chóng, tin cậy.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Về chúng tôi</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Giới thiệu</a></li>
                <li><a href="#" className="hover:text-white transition">Quy chế hoạt động</a></li>
                <li><a href="#" className="hover:text-white transition">Bảo mật thông tin</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Hỗ trợ khách hàng</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Hotline: 1900 1234</li>
                <li>Email: hotro@carshop.vn</li>
                <li>Địa chỉ: Cầu Giấy, Hà Nội</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Tải ứng dụng</h4>
              <div className="flex flex-col gap-2">
                <div className="bg-gray-800 p-2 rounded-lg text-center text-xs cursor-pointer border border-gray-700">App Store</div>
                <div className="bg-gray-800 p-2 rounded-lg text-center text-xs cursor-pointer border border-gray-700">Google Play</div>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
            © 2026 CarShop Marketplace. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}