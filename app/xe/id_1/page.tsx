// app/xe/[id]/page.tsx
export default function CarDetail({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ảnh xe */}
        <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center text-gray-500">
          [Ảnh xe ID: {params.id}]
        </div>
        
        {/* Thông tin mua bán */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Tên xe mẫu - ID: {params.id}</h1>
          <p className="text-2xl text-red-600 font-bold">1.200.000.000 đ</p>
          <div className="border-t pt-4">
            <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg">
              LIÊN HỆ NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}