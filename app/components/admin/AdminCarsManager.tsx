"use client";

import { useMemo, useState, useTransition } from "react";

interface AdminCarsManagerProps {
  cars: Array<{
    id: string;
    name: string;
    brand: string;
    price: number;
    year: number;
    adminStatus: string;
    createdAt: string | Date;
  }>;
}

export default function AdminCarsManager({ cars: initialCars }: AdminCarsManagerProps) {
  const [cars, setCars] = useState(initialCars);
  const [filter, setFilter] = useState("all");
  const [isPending, startTransition] = useTransition();

  const filteredCars = useMemo(() => {
    if (filter === "all") return cars;
    return cars.filter((car) => car.adminStatus === filter);
  }, [cars, filter]);

  function updateStatus(id: string, adminStatus: string) {
    startTransition(async () => {
      const res = await fetch("/api/admin/cars", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, adminStatus }),
      });

      if (!res.ok) return;

      setCars((prev) => prev.map((car) => (car.id === id ? { ...car, adminStatus } : car)));
    });
  }

  function deleteCar(id: string) {
    startTransition(async () => {
      const res = await fetch("/api/admin/cars", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) return;

      setCars((prev) => prev.filter((car) => car.id !== id));
    });
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Quản lý kho xe</h2>
          <p className="mt-1 text-sm text-slate-500">Duyệt, từ chối hoặc xóa tin đăng đang có trong hệ thống.</p>
        </div>
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="pending">Chờ duyệt</option>
          <option value="approved">Đã duyệt</option>
          <option value="rejected">Từ chối</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="p-4">Xe</th>
              <th className="p-4">Giá</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4">Ngày đăng</th>
              <th className="p-4">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredCars.map((car) => (
              <tr key={car.id} className="border-b align-top">
                <td className="p-4">
                  <div className="font-semibold text-slate-900">{car.name}</div>
                  <div className="text-sm text-slate-500">
                    {car.brand} • {car.year}
                  </div>
                </td>
                <td className="p-4 font-semibold text-red-600">{car.price.toLocaleString("vi-VN")} đ</td>
                <td className="p-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                    car.adminStatus === "approved"
                      ? "bg-emerald-100 text-emerald-700"
                      : car.adminStatus === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                  }`}>
                    {car.adminStatus}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-500">
                  {new Date(car.createdAt).toLocaleDateString("vi-VN")}
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      disabled={isPending}
                      onClick={() => updateStatus(car.id, "approved")}
                      className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white"
                    >
                      Duyệt
                    </button>
                    <button
                      disabled={isPending}
                      onClick={() => updateStatus(car.id, "rejected")}
                      className="rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-white"
                    >
                      Từ chối
                    </button>
                    <button
                      disabled={isPending}
                      onClick={() => deleteCar(car.id)}
                      className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
