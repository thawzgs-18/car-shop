"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Car, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="mb-10 grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-2">
                <Car className="h-7 w-7 text-red-500" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-[-0.08em] text-white">CARSHOP</span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Vietnam car marketplace</p>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Nền tảng mua bán ô tô tập trung vào chất lượng tin đăng, dữ liệu rõ ràng và trải nghiệm chốt giao
              dịch nhanh cho cả người mua lẫn người bán.
            </p>
            <Link
              href="/xe"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:text-red-400"
            >
              Khám phá kho xe <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-white">Điều hướng</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/xe" className="transition hover:text-red-400">Kho xe đang bán</Link></li>
              <li><Link href="/ban-xe" className="transition hover:text-red-400">Đăng tin bán xe</Link></li>
              <li><Link href="/tin-tuc" className="transition hover:text-red-400">Tin tức thị trường</Link></li>
              <li><Link href="/gioi-thieu" className="transition hover:text-red-400">Giới thiệu CarShop</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-white">Cam kết</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Tin đăng kiểm duyệt trước khi hiển thị</li>
              <li>Hỗ trợ định giá và vay mua xe</li>
              <li>Ưu tiên xe có lịch sử bảo dưỡng rõ ràng</li>
              <li>Tư vấn thủ tục sang tên tận nơi</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-white">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-red-500" size={18} />
                <span>Phan Đăng Lưu, Kiến An, Hải Phòng</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-red-500" size={18} />
                <span>0865 372 637</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-red-500" size={18} />
                <span>pthangg18@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CarShop Vietnam. Minh bạch thông tin, tối ưu giao dịch.</p>
          <div className="flex gap-5">
            <span>Hotline hỗ trợ 24/7</span>
            <span>Hệ thống kiểm duyệt nội dung chủ động</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
