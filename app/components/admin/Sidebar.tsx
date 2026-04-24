import Link from "next/link";
import { LayoutDashboard, Car, Users, MessageSquare, Newspaper } from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/admin" },
    { name: "Quản lý xe", icon: <Car size={20} />, href: "/admin/cars" },
    { name: "Khách hàng", icon: <Users size={20} />, href: "/admin/users" },
    { name: "Tin tức", icon: <Newspaper size={20} />, href: "/admin/news" },
    { name: "Yêu cầu gọi lại", icon: <MessageSquare size={20} />, href: "/admin/orders" },
  ];

  return (
    <aside className="min-h-screen w-72 bg-slate-950 p-4 text-white">
      <div className="mb-8 border-b border-slate-800 px-4 py-3">
        <span className="text-xl font-black text-red-500">CARSHOP</span>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Admin control panel</p>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
