import { ShieldCheck, Users, Trophy, Zap } from "lucide-react";

export default function GioiThieuPage() {
  const stats = [
    { label: "Khách hàng tin dùng", value: "50,000+" },
    { label: "Xe đã kiểm định", value: "10,000+" },
    { label: "Đối tác showroom", value: "500+" },
    { label: "Năm kinh nghiệm", value: "10+" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-red-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Về Chúng Tôi - CARSHOP
          </h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto font-medium">
            Nền tảng mua bán ô tô trực tuyến hàng đầu Việt Nam, nơi kết nối niềm tin và sự minh bạch trong từng giao dịch.
          </p>
        </div>
      </div>

      {/* Thông số ấn tượng */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center">
              <div className="text-3xl font-black text-red-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase">
              Tầm nhìn & Sứ mệnh
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tại <span className="font-bold text-red-600">CARSHOP</span>, chúng tôi không chỉ bán xe, chúng tôi mang đến giải pháp di chuyển an tâm. Chúng tôi hiểu rằng mỗi chiếc xe là một tài sản lớn và là người bạn đồng hành của mỗi gia đình.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-red-50 p-2 rounded-lg text-red-600"><ShieldCheck /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Minh bạch tuyệt đối</h4>
                  <p className="text-sm text-gray-500">Mọi thông tin về tình trạng xe và lịch sử bảo dưỡng đều được công khai.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-50 p-2 rounded-lg text-red-600"><Zap /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Giao dịch nhanh chóng</h4>
                  <p className="text-sm text-gray-500">Hỗ trợ thủ tục sang tên và vay vốn ngân hàng chỉ trong 24h.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000" 
                alt="Office" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300" />
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