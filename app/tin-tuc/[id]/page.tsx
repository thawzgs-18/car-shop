"use client";

import { useParams } from "next/navigation";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";

// Dữ liệu mẫu (Nên đồng bộ với dữ liệu ở trang danh sách tin tức)
const newsData = [
  {
    id: 1,
    title: "Toyota Camry 2025 chính thức lộ diện với thiết kế đột phá",
    content: "Toyota Camry 2025 vừa ra mắt toàn cầu với sự lột xác hoàn toàn. Điểm đáng chú ý nhất là việc Toyota loại bỏ động cơ thuần xăng, thay vào đó là hệ thống Hybrid thế hệ thứ 5 tiêu chuẩn trên tất cả các phiên bản. Thiết kế đầu xe theo ngôn ngữ 'Hammerhead' mang lại vẻ ngoài thể thao, tiệm cận với dòng xe hạng sang Lexus. Nội thất được trang bị màn hình giải trí 12.3 inch tích hợp Apple CarPlay không dây.",
    date: "02/04/2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800"
  },
  {
    id: 2,
    title: "VinFast VF8 đạt chứng nhận an toàn 5 sao tại thị trường Mỹ",
    content: "Cơ quan An toàn Giao thông Cao tốc Quốc gia Mỹ (NHTSA) vừa công bố kết quả thử nghiệm va chạm cho VinFast VF8. Mẫu xe điện Việt Nam đã xuất sắc đạt điểm số tối đa 5 sao ở tất cả các hạng mục chính bao gồm va chạm trực diện, va chạm bên hông và khả năng chống lật. Đây là cột mốc quan trọng giúp VinFast tăng cường niềm tin với người tiêu dùng tại thị trường khó tính nhất thế giới.",
    date: "01/04/2026",
    author: "Trần Thắng",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800"
  },
  {
    id: 3,
    title: "5 lưu ý quan trọng khi mua xe ô tô cũ bạn cần biết",
    content: "Mua xe cũ là giải pháp tiết kiệm nhưng tiềm ẩn nhiều rủi ro. Đầu tiên, hãy kiểm tra kỹ sổ bảo dưỡng định kỳ để biết chủ cũ chăm sóc xe ra sao. Thứ hai, quan sát các khe hở trên thân vỏ để phát hiện xe từng bị đâm đụng. Thứ ba, lái thử xe ở nhiều dải tốc độ khác nhau để cảm nhận độ ổn định của gầm bệ. Thứ tư, kiểm tra pháp lý giấy tờ gốc. Cuối cùng, đừng ngần ngại mang xe vào các trung tâm uy tín để check hãng.",
    date: "30/03/2026",
    author: "Chuyên gia",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800"
  },
  {
    id: 4,
    title: "Đánh giá Hyundai SantaFe 2024: Có xứng đáng ngôi vương?",
    content: "Hyundai SantaFe 2024 gây tranh cãi với thiết kế vuông vức kiểu 'hộp di động' nhưng thực tế lại mang đến không gian nội thất cực kỳ rộng rãi. Hàng ghế thứ 3 giờ đây có thể ngồi thoải mái ngay cả với người lớn. Xe được trang bị hệ thống màn hình cong đôi sang trọng và khay sạc không dây kép. Về vận hành, động cơ Smartstream 2.5L kết hợp hộp số ly hợp kép 8 cấp mang lại trải nghiệm mượt mà nhưng vẫn đầy sức mạnh.",
    date: "28/03/2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800"
  }
];

export default function ChiTietTinTuc() {
  const params = useParams();
  const id = params.id;

  // Tìm bài viết khớp với ID
  const news = newsData.find((item) => item.id === Number(id));

  if (!news) {
    return <div className="container mx-auto py-20 text-center text-red-600 font-bold">Không tìm thấy bài viết!</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Ảnh nền tiêu đề */}
      <div className="h-[400px] w-full relative">
        <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <Link href="/tin-tuc" className="flex items-center gap-2 mb-6 hover:text-red-400 transition">
            <ArrowLeft size={20} /> Quay lại Tin tức
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-center max-w-4xl uppercase tracking-tighter">
            {news.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
          {/* Thông tin metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8 border-b pb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-red-600" /> {news.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-red-600" /> Đăng bởi: {news.author}
            </div>
            <button className="flex items-center gap-2 ml-auto hover:text-red-600 transition">
              <Share2 size={18} /> Chia sẻ
            </button>
          </div>

          {/* Nội dung bài viết */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed italic mb-8">
             {news.content}
          </div>
          
          <p className="text-gray-600 mb-8">
            (Nội dung chi tiết đang được cập nhật thêm hình ảnh và video đánh giá thực tế từ đội ngũ chuyên gia của CARSHOP).
          </p>

          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
             <h4 className="font-bold text-red-600 mb-2 uppercase italic">Tin liên quan</h4>
             <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Bảng giá xe Toyota mới nhất tháng 4/2026</li>
                <li>So sánh Toyota Camry và Honda Accord</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}