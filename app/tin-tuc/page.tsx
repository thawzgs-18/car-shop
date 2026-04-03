import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function TinTucPage() {
  const newsList = [
  {
    id: 1,
    title: "Toyota Camry 2025 chính thức lộ diện với thiết kế đột phá",
    excerpt: "Mẫu sedan hạng D ăn khách vừa ra mắt phiên bản mới với hệ truyền động Hybrid tiêu chuẩn và diện mạo trẻ trung hơn...",
    date: "02/04/2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800",
    category: "Tin tức"
  },
  {
    id: 2,
    title: "VinFast VF8 đạt chứng nhận an toàn 5 sao tại thị trường Mỹ",
    excerpt: "Vượt qua các bài kiểm tra va chạm khắt khe, mẫu xe điện đến từ Việt Nam khẳng định vị thế về độ an toàn trên trường quốc tế...",
    date: "01/04/2026",
    author: "Trần Thắng",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800",
    category: "Thị trường"
  },
  {
    id: 3,
    title: "5 lưu ý quan trọng khi mua xe ô tô cũ bạn cần biết",
    excerpt: "Kiểm tra động cơ, lịch sử bảo dưỡng và giấy tờ pháp lý là những bước không thể bỏ qua để tránh 'tiền mất tật mang'...",
    date: "30/03/2026",
    author: "Chuyên gia",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800",
    category: "Tư vấn"
  },
  {
    id: 4,
    title: "Đánh giá Hyundai SantaFe 2024: Có xứng đáng ngôi vương?",
    excerpt: "Với sự thay đổi toàn diện về ngoại thất vuông vức và nội thất sang trọng, SantaFe đang tạo nên cơn sốt trong phân khúc SUV...",
    date: "28/03/2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800",
    category: "Đánh giá"
  }
];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header trang */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
            Tin tức & Đánh giá xe
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về thị trường ô tô, đánh giá xe chuyên sâu và kinh nghiệm sử dụng xe từ các chuyên gia.
          </p>
        </div>

        {/* Lưới tin tức */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsList.map((news) => (
            <div key={news.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              {/* Ảnh tin tức */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {news.category}
                </div>
              </div>

              {/* Nội dung */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {news.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {news.author}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                  {news.excerpt}
                </p>

                <Link href={`/tin-tuc/${news.id}`}>
                  <button className="flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all">
                    Xem chi tiết <ArrowRight size={16} />
                  </button>
               </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}