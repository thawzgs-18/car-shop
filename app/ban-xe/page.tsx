"use client";

import { useState } from "react";
import { Car, DollarSign, MapPin, User, Phone, Loader2 } from "lucide-react";

const initialForm = {
  name: "",
  brand: "Toyota",
  price: "",
  year: "",
  km: "",
  type: "SUV",
  location: "",
  image: "",
  status: "Đã sử dụng",
  transmission: "",
  fuel: "Xăng",
  engine: "",
  description: "",
  sellerName: "",
  phoneNumber: "",
};

export default function BanXePage() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Không thể gửi tin đăng");
        return;
      }

      setSubmitted(true);
      setFormData(initialForm);
    } catch {
      setError("Không thể kết nối đến máy chủ.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-lg rounded-3xl border border-green-100 bg-white p-10 shadow-xl">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Car size={40} />
          </div>
          <h1 className="mb-4 text-3xl font-black text-gray-900">Gửi tin thành công</h1>
          <p className="mb-8 text-gray-600">
            Tin đăng của bạn đã được lưu với trạng thái chờ duyệt. Đội ngũ CarShop sẽ kiểm tra nội dung trước khi
            hiển thị công khai trên website.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="rounded-xl bg-red-600 px-8 py-3 font-bold text-white transition hover:bg-red-700"
          >
            Đăng thêm tin khác
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fff7ed_0%,_#f8fafc_100%)] py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-black uppercase tracking-tighter text-gray-900">
            Đăng tin bán xe
          </h1>
          <p className="font-medium text-gray-500">
            Điền đủ thông tin xe để hệ thống tiếp nhận và chuyển sang trạng thái chờ duyệt.
          </p>
        </div>

        {error && <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 border-b pb-4 text-xl font-bold text-gray-800">
              <Car className="text-red-600" /> Thông tin phương tiện
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Tên xe và phiên bản</label>
                <input required type="text" placeholder="VD: Toyota Camry 2.5Q" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:ring-2 focus:ring-red-500" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Hãng xe</label>
                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.brand} onChange={(e) => setFormData({ ...formData, brand: e.target.value })}>
                  <option>Toyota</option>
                  <option>Hyundai</option>
                  <option>Honda</option>
                  <option>VinFast</option>
                  <option>Mercedes-Benz</option>
                  <option>BMW</option>
                  <option>Ford</option>
                  <option>Khác</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Năm sản xuất</label>
                <input required type="number" placeholder="2023" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Số km đã đi</label>
                <input required type="number" placeholder="Nhập số km" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.km} onChange={(e) => setFormData({ ...formData, km: e.target.value })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Dòng xe</label>
                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Pickup</option>
                  <option>Hatchback</option>
                  <option>MPV</option>
                  <option>Coupe</option>
                  <option>Xe điện</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Tình trạng</label>
                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                  <option>Mới</option>
                  <option>Đã sử dụng</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-red-600">
                  <DollarSign size={16} /> Giá bán mong muốn (VNĐ)
                </label>
                <input required type="number" placeholder="VD: 850000000" className="w-full rounded-xl border border-red-100 bg-red-50 px-4 py-4 text-lg font-bold outline-none focus:ring-2 focus:ring-red-500" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Hộp số</label>
                <input required type="text" placeholder="VD: Tự động 8 cấp" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.transmission} onChange={(e) => setFormData({ ...formData, transmission: e.target.value })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Nhiên liệu</label>
                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.fuel} onChange={(e) => setFormData({ ...formData, fuel: e.target.value })}>
                  <option>Xăng</option>
                  <option>Dầu</option>
                  <option>Điện</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Động cơ</label>
                <input required type="text" placeholder="VD: 2.0L Turbo" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.engine} onChange={(e) => setFormData({ ...formData, engine: e.target.value })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Khu vực xem xe</label>
                <input required type="text" placeholder="VD: Hà Nội" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 border-b pb-4 text-xl font-bold text-gray-800">
              <Car className="text-red-600" /> Hình ảnh và mô tả
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Link ảnh đại diện</label>
                <input required type="url" placeholder="https://..." className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Mô tả chi tiết</label>
                <textarea required rows={5} placeholder="Mô tả tình trạng xe, lịch sử bảo dưỡng, option nổi bật..." className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 border-b pb-4 text-xl font-bold text-gray-800">
              <User className="text-red-600" /> Thông tin liên hệ
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Họ và tên người bán</label>
                <input required type="text" placeholder="Nhập tên của bạn" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" value={formData.sellerName} onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Số điện thoại</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="tel" placeholder="09xx xxx xxx" className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 outline-none focus:ring-2 focus:ring-red-500" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-gray-700">Địa chỉ xem xe chi tiết</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="text" placeholder="Số nhà, tên đường, tỉnh/thành phố..." className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 outline-none focus:ring-2 focus:ring-red-500" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 py-5 text-xl font-black uppercase tracking-widest text-white shadow-xl shadow-red-200 transition hover:scale-[1.01] hover:bg-red-700 active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100">
            {loading && <Loader2 className="animate-spin" size={22} />}
            {loading ? "Đang gửi tin..." : "Đăng tin ngay"}
          </button>
        </form>
      </div>
    </div>
  );
}
