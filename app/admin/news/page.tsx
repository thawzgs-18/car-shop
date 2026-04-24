export default function AdminNewsPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Quản lý Tin tức</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Viết bài mới
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Một mẫu bài viết */}
        <div className="flex gap-4 border p-3 rounded-xl hover:shadow-md transition-shadow">
          <div className="w-24 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
          <div>
            <h3 className="font-bold text-sm line-clamp-2">Xu hướng lựa chọn xe bán tải Ford Ranger trong năm 2026</h3>
            <p className="text-xs text-gray-500 mt-1">Ngày đăng: 24/04/2026</p>
            <div className="mt-2 flex gap-2">
              <button className="text-xs text-blue-600">Sửa</button>
              <button className="text-xs text-red-600">Xóa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}