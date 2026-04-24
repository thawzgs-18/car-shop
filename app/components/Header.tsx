import Link from "next/link";
import { Car, Menu } from "lucide-react";
import { auth } from "@/auth";
import UserNav from "./UserNav";

export default async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container relative mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="rounded-2xl bg-red-50 p-2 text-red-600 transition group-hover:scale-105">
            <Car className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black uppercase tracking-[-0.08em] text-slate-900">CARSHOP</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Buy. Sell. Upgrade.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/xe" className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700 transition hover:text-red-600">
            Kho xe
          </Link>
          <Link href="/ban-xe" className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700 transition hover:text-red-600">
            Bán xe
          </Link>
          <Link href="/tin-tuc" className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700 transition hover:text-red-600">
            Tin tức
          </Link>
          <Link href="/gioi-thieu" className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700 transition hover:text-red-600">
            Giới thiệu
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="rounded-full border border-slate-200 p-2 text-slate-500 md:hidden">
            <Menu className="h-5 w-5" />
          </div>
          <UserNav session={session} />
        </div>
      </div>
    </header>
  );
}
