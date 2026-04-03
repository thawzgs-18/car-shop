"use client";

import { useState } from "react";
import { Camera, Car, DollarSign, MapPin, User, Phone } from "lucide-react";

export default function BanXePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập gửi form thành công
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg mx-auto border border-green-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Car size={40} />
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-4">Gửi tin thành công!</h1>
          <p className="text-gray-600 mb-8">
            Cảm ơn bạn đã tin tưởng CarShop. Đội ngũ kỹ thuật sẽ kiểm định và duyệt tin của bạn trong vòng 24h.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition"
          >
            Đăng thêm tin khác
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tighter uppercase">
            Đăng tin bán xe miễn phí
          </h1>
          <p className="text-gray-500 font-medium">
            Tiếp cận hơn 1 triệu khách hàng tiềm năng tại hệ thống <span className="text-red-600 font-bold">CARSHOP</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Thông tin xe */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-4 text-gray-800">
              <Car className="text-red-600" /> Thông tin phương tiện
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tên xe & Phiên bản</label>
                <input required type="text" placeholder="VD: Toyota Camry 2.5Q" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Hãng xe</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500">
                  <option>Toyota</option>
                  <option>Hyundai</option>
                  <option>Honda</option>
                  <option>VinFast</option>
                  <option>Mercedes-Benz</option>
                  <option>Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Năm sản xuất</label>
                <input required type="number" placeholder="2023" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Số KM đã đi</label>
                <input required type="number" placeholder="Nhập số KM" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2 text-red-600 flex items-center gap-2">
                   <DollarSign size={16} /> Giá bán mong muốn (VNĐ)
                </label>
                <input required type="number" placeholder="VD: 850000000" className="w-full px-4 py-4 bg-red-50 border border-red-100 rounded-xl outline-none focus:ring-2 focus:ring-red-500 font-bold text-lg" />
              </div>
            </div>
          </div>

          {/* Section 2: Hình ảnh */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-4 text-gray-800">
              <Camera className="text-red-600" /> Hình ảnh xe
            </h2>
            <div className="border-2 border-dashed border-gray-200 rounded-3xl p-10 text-center hover:border-red-400 transition cursor-pointer bg-gray-50">
              <Camera className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-600 font-medium">Nhấn để tải ảnh hoặc kéo thả vào đây</p>
              <p className="text-xs text-gray-400 mt-2">Tối đa 6 ảnh (Mặt trước, sau, nội thất, động cơ...)</p>
            </div>
          </div>

          {/* Section 3: Liên hệ */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-4 text-gray-800">
              <User className="text-red-600" /> Thông tin liên hệ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên người bán</label>
                <input required type="text" placeholder="Nhập tên của bạn" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="tel" placeholder="09xx xxx xxx" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Địa chỉ xem xe</label>
                <div className="relative">
                   <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                   <input required type="text" placeholder="Số nhà, tên đường, tỉnh/thành phố..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500" />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-red-200 hover:bg-red-700 hover:scale-[1.01] transition transform active:scale-[0.99] uppercase tracking-widest">
            Đăng tin ngay
          </button>
        </form>
      </div>
    </div>
  );
}