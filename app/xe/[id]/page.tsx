import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

// Ép Next.js luôn lấy dữ liệu mới nhất từ Database
export const dynamic = "force-dynamic";

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    where: { adminStatus: "approved" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Danh sách xe đang bán</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-52">
              <Image 
                src={car.image} 
                alt={car.name} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{car.name}</h2>
                <span className="text-red-600 font-bold">
                  {car.price.toLocaleString('vi-VN')} đ
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                <p>📍 {car.location}</p>
                <p>⚙️ {car.transmission}</p>
                <p>⛽ {car.fuel}</p>
                <p>📅 {car.year}</p>
              </div>

              <Link href={`/cars/${car.id}`}>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Xem chi tiết
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}