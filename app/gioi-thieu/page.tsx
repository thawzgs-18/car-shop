import { ShieldCheck, Zap } from "lucide-react";

export default function GioiThieuPage() {
  const stats = [
    { label: "Khách hàng tin dùng", value: "50,000+" },
    { label: "Xe đã kiểm định", value: "10,000+" },
    { label: "Đối tác showroom", value: "500+" },
    { label: "Năm kinh nghiệm", value: "10+" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-red-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
            Về Chúng Tôi - CARSHOP
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-red-100">
            Nền tảng mua bán ô tô trực tuyến tập trung vào sự minh bạch, tốc độ và khả năng chốt giao dịch an toàn.
          </p>
        </div>
      </div>

      <div className="container mx-auto -mt-12 px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl">
              <div className="mb-1 text-3xl font-black text-red-600">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-black uppercase text-gray-900">Tầm nhìn & Sứ mệnh</h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Tại <span className="font-bold text-red-600">CARSHOP</span>, chúng tôi xây một hệ thống đủ rõ ràng để
              người mua xem xe yên tâm hơn và người bán tiết kiệm thời gian hơn. Mỗi chiếc xe là một tài sản lớn nên
              dữ liệu và quy trình phải đáng tin trước khi nói đến doanh số.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="rounded-lg bg-red-50 p-2 text-red-600"><ShieldCheck /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Minh bạch tuyệt đối</h4>
                  <p className="text-sm text-gray-500">Mọi thông tin về tình trạng xe, đời xe, số km và mô tả được chuẩn hóa trước khi hiển thị.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="rounded-lg bg-red-50 p-2 text-red-600"><Zap /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Giao dịch nhanh chóng</h4>
                  <p className="text-sm text-gray-500">Hỗ trợ định giá, vay mua xe và quy trình tiếp nhận tin đăng trong một hệ thống thống nhất.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-3xl bg-gray-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000"
                alt="Office"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-300" />
                  ))}
                </div>
                <div className="text-sm font-bold text-gray-900">Đội ngũ chuyên gia tận tâm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
