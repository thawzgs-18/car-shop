import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminCarsTable() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quản lý kho xe</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">+ Thêm xe mới</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-4">Xe</th>
              <th className="p-4">Giá</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4">Ngày đăng</th>
              <th className="p-4">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4">
                  <div className="font-medium">{car.name}</div>
                  <div className="text-xs text-gray-400">{car.brand} - {car.year}</div>
                </td>
                <td className="p-4 font-semibold text-blue-600">
                  {car.price.toLocaleString('vi-VN')} đ
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    car.adminStatus === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {car.adminStatus === 'approved' ? 'Đã duyệt' : 'Chờ duyệt'}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-500">
                  {new Date(car.createdAt).toLocaleDateString('vi-VN')}
                </td>
                <td className="p-4">
                  <button className="text-blue-500 hover:underline mr-3 text-sm">Sửa</button>
                  <button className="text-red-500 hover:underline text-sm">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}