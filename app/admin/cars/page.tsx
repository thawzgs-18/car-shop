import Sidebar from "@/app/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Thanh điều hướng bên trái */}
      <Sidebar /> 
      
      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">Hệ thống Quản trị</h1>
          {/* Hiển thị avatar admin tương tự như UserNav */}
          <div className="flex items-center gap-2">
            <span className="font-medium">Admin</span>
          </div>
        </header>

        {/* Nội dung của từng trang quản lý sẽ hiển thị ở đây */}
        {children}
      </main>
    </div>
  );
}