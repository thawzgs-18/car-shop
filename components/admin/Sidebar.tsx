import Link from 'next/link';
import { LayoutDashboard, Car, Users, MessageSquare, Newspaper } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/admin' },
    { name: 'Quản lý xe', icon: <Car size={20} />, href: '/admin/cars' },
    { name: 'Khách hàng', icon: <Users size={20} />, href: '/admin/users' },
    { name: 'Tin tức', icon: <Newspaper size={20} />, href: '/admin/news' },
    { name: 'Yêu cầu gọi lại', icon: <MessageSquare size={20} />, href: '/admin/orders' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4">
      <div className="mb-8 px-4 py-2 border-b border-slate-700">
        <span className="text-xl font-bold text-red-500">CAR SHOP</span>
        <p className="text-[10px] text-gray-400">ADMIN CONTROL PANEL</p>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}