import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: { car: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Yêu cầu khách hàng</h2>
      <div className="grid gap-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-xl flex justify-between items-center bg-gray-50/50">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold text-lg">{order.customerName}</span>
                <span className="text-blue-600 font-mono">{order.phoneNumber}</span>
              </div>
              <p className="text-gray-600 text-sm">
                Quan tâm xe: <span className="font-medium text-black">{order.car.name}</span>
              </p>
              {order.message && (
                <p className="mt-2 text-sm italic text-gray-500 italic">"{order.message}"</p>
              )}
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 mb-2">
                {new Date(order.createdAt).toLocaleString('vi-VN')}
              </div>
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700">
                Đã liên hệ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}