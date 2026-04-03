"use client";

import Link from "next/link";
// Sử dụng các icon cơ bản để đảm bảo không bị lỗi export
import { 
  Mail, 
  Phone, 
  MapPin, 
  Car, 
  Info,
  Send,
  Globe
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Cột 1: Giới thiệu */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Car className="text-red-500 w-8 h-8" />
              <span className="text-2xl font-black text-white tracking-tighter">CARSHOP</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Nền tảng kết nối niềm tin giữa người mua và người bán ô tô hàng đầu Việt Nam.
            </p>
            <div className="flex gap-4">
              {/* Dùng icon Globe và Send thay cho Facebook/Youtube để tránh lỗi build */}
              <div className="hover:text-red-500 cursor-pointer"><Globe size={20} /></div>
              <div className="hover:text-red-500 cursor-pointer"><Send size={20} /></div>
              <div className="hover:text-red-500 cursor-pointer"><Info size={20} /></div>
            </div>
          </div>

          {/* Cột 2: Khám phá */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm">Khám phá</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/gioi-thieu" className="hover:text-red-500 transition">Giới thiệu</Link></li>
              <li><Link href="/ban-xe" className="hover:text-red-500 transition">Bán xe</Link></li>
              <li><Link href="/tin-tuc" className="hover:text-red-500 transition">Tin tức</Link></li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm">Hỗ trợ</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Quy định đăng tin</li>
              <li>Chính sách bảo mật</li>
              <li>Giải quyết khiếu nại</li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm">Liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-500 shrink-0" size={18} />
                <span>Phan Đăng Lưu, Kiến An, Hải Phòng</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-500 shrink-0" size={18} />
                <span>0865372637</span>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="text-red-500 shrink-0" size={18} />
                 <span>pthangg18@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© 2026 CARSHOP Việt Nam.</p>
        </div>
      </div>
    </footer>
  );
}