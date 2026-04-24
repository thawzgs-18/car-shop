"use client";

import { useState } from "react";
import { Loader2, PhoneCall } from "lucide-react";

interface CarInquiryFormProps {
  carId: string;
  carName: string;
}

export default function CarInquiryForm({ carId, carName }: CarInquiryFormProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    message: `Tôi muốn được tư vấn thêm về xe ${carName}.`,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          carId,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(data.message || "Không thể gửi yêu cầu.");
        return;
      }

      setStatus("success");
      setFormData({
        customerName: "",
        phoneNumber: "",
        message: `Tôi muốn được tư vấn thêm về xe ${carName}.`,
      });
    } catch {
      setStatus("error");
      setError("Không thể kết nối đến hệ thống.");
    }
  }

  return (
    <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Liên hệ mua xe</p>
      <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.03em]">Để lại thông tin để CarShop gọi lại.</h2>
      <p className="mt-4 text-sm leading-7 text-white/75">
        Yêu cầu của bạn sẽ được lưu trong hệ thống quản trị để đội ngũ tư vấn theo dõi và liên hệ lại nhanh hơn.
      </p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <input
          required
          value={formData.customerName}
          onChange={(event) => setFormData((prev) => ({ ...prev, customerName: event.target.value }))}
          placeholder="Họ và tên"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-red-400"
        />
        <input
          required
          value={formData.phoneNumber}
          onChange={(event) => setFormData((prev) => ({ ...prev, phoneNumber: event.target.value }))}
          placeholder="Số điện thoại"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-red-400"
        />
        <textarea
          rows={4}
          value={formData.message}
          onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-red-400"
        />
        {status === "success" && (
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            Đã ghi nhận yêu cầu. CarShop sẽ liên hệ lại sớm.
          </div>
        )}
        {status === "error" && (
          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-red-50 disabled:opacity-70"
        >
          {status === "loading" ? <Loader2 className="animate-spin" size={16} /> : <PhoneCall size={16} />}
          Gửi yêu cầu
        </button>
      </form>
    </div>
  );
}
