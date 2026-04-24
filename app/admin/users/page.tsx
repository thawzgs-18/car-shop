export default function AdminUsersPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Quản lý Tài khoản</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Thêm nhân viên
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b text-gray-400 text-sm">
            <th className="pb-4">NGƯỜI DÙNG</th>
            <th className="pb-4">EMAIL</th>
            <th className="pb-4">VAI TRÒ</th>
            <th className="pb-4">THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50 transition-colors">
            <td className="py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">TP</div>
              <span className="font-medium">Thắng Phạm Văn</span>
            </td>
            <td className="py-4 text-gray-600">thangpham@example.com</td>
            <td className="py-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Admin</span>
            </td>
            <td className="py-4">
              <button className="text-blue-600 hover:underline mr-3">Sửa</button>
              <button className="text-red-600 hover:underline">Khóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}