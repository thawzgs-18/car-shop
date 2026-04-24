export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  image?: string;
  authorName: string;
  createdAt: string;
}

export const FALLBACK_NEWS: NewsItem[] = [
  {
    id: "fallback-1",
    title: "Toyota Camry 2025 chính thức lộ diện với thiết kế đột phá",
    slug: "toyota-camry-2025-lo-dien",
    content:
      "Toyota Camry 2025 bước sang ngôn ngữ thiết kế trẻ trung hơn, bổ sung nhiều công nghệ an toàn và giữ thế mạnh về độ bền, độ êm cùng khả năng giữ giá. Đây tiếp tục là mẫu sedan hạng D đáng chú ý cho nhóm khách hàng gia đình và doanh nhân.",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1200",
    authorName: "Ban biên tập CarShop",
    createdAt: "2026-04-02T09:00:00.000Z",
  },
  {
    id: "fallback-2",
    title: "VinFast VF8 tiếp tục ghi điểm ở nhóm SUV điện cỡ D",
    slug: "vinfast-vf8-ghi-diem-o-nhom-suv-dien",
    content:
      "VF8 đang là một trong những lựa chọn nổi bật ở phân khúc SUV điện nhờ thiết kế hiện đại, nhiều công nghệ hỗ trợ lái và hệ sinh thái sạc phủ rộng hơn trước. Mẫu xe này phù hợp với người dùng muốn chuyển sang xe điện nhưng vẫn cần không gian cho gia đình.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200",
    authorName: "Trần Thắng",
    createdAt: "2026-04-01T10:00:00.000Z",
  },
  {
    id: "fallback-3",
    title: "5 điểm cần kiểm tra trước khi xuống tiền mua xe cũ",
    slug: "5-diem-can-kiem-tra-khi-mua-xe-cu",
    content:
      "Khi mua xe cũ, người dùng cần ưu tiên kiểm tra lịch sử bảo dưỡng, hệ thống khung gầm, tình trạng động cơ, giấy tờ pháp lý và độ đồng đều của nước sơn. Những bước này giúp giảm đáng kể rủi ro mua phải xe từng tai nạn hoặc thủy kích.",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200",
    authorName: "Chuyên gia CarShop",
    createdAt: "2026-03-30T08:30:00.000Z",
  },
];
