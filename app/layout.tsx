import type { Metadata } from "next"; // Import kiểu dữ liệu Metadata
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Cấu hình tên hiển thị trên tab trình duyệt tại đây
export const metadata: Metadata = {
  title: "Carshop - Sàn giao dịch ô tô số 1",
  description: "Nền tảng kết nối người mua và người bán ô tô hàng đầu Việt Nam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen">
        <Header />
        {/* main grow giúp đẩy Footer xuống cuối trang khi nội dung ngắn */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}