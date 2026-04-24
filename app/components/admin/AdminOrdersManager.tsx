"use client";

import { useState, useTransition } from "react";

interface AdminOrdersManagerProps {
  orders: Array<{
    id: string;
    customerName: string;
    phoneNumber: string;
    message: string | null;
    status: string;
    createdAt: string | Date;
    car: { name: string };
  }>;
}

export default function AdminOrdersManager({ orders: initialOrders }: AdminOrdersManagerProps) {
  const [orders, setOrders] = useState(initialOrders);
  const [isPending, startTransition] = useTransition();

  function updateStatus(id: string, status: string) {
    startTransition(async () => {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (!res.ok) return;
      setOrders((prev) => prev.map((order) => (order.id === id ? { ...order, status } : order)));
    });
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">Yêu cầu khách hàng</h2>
      <div className="grid gap-4">
        {orders.map((order) => (
          <div key={order.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <span className="text-lg font-bold text-slate-900">{order.customerName}</span>
                  <span className="font-mono text-blue-600">{order.phoneNumber}</span>
                </div>
                <p className="text-sm text-slate-600">
                  Quan tâm xe: <span className="font-semibold text-slate-900">{order.car.name}</span>
                </p>
                {order.message && <p className="mt-2 text-sm italic text-slate-500">&quot;{order.message}&quot;</p>}
              </div>
              <div className="text-right">
                <div className="mb-2 text-xs text-slate-400">{new Date(order.createdAt).toLocaleString("vi-VN")}</div>
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{order.status}</div>
                <div className="flex flex-wrap justify-end gap-2">
                  <button
                    disabled={isPending}
                    onClick={() => updateStatus(order.id, "contacted")}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white"
                  >
                    Đã liên hệ
                  </button>
                  <button
                    disabled={isPending}
                    onClick={() => updateStatus(order.id, "completed")}
                    className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white"
                  >
                    Hoàn tất
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
