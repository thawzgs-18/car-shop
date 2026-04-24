export default function AdminOrdersPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Yêu cầu liên hệ mua xe</h2>
      <div className="space-y-4">
        {/* Mẫu một yêu cầu khách hàng */}
        <div className="flex items-center justify-between p-4 border rounded-xl bg-gray-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-800">Khách hàng: Nguyễn Văn A</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Mới</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Quan tâm xe: <span className="font-medium">Ford Ranger Wildtrak</span>
            </p>
            <p className="text-sm text-red-600 font-medium">SĐT: 0865.372.637</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 mb-2">2 giờ trước</p>
            <button className="bg-white border border-gray-300 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-100">
              Đã xử lý
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}