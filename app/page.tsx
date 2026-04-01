import Link from 'next/link';
import { Search, Car, MapPin, Calendar, Gauge } from 'lucide-react';

export default function HomePage() {
  const cars = [
    { id: 1, name: "Toyota Camry 2.5Q", price: "1.050.000.000 đ", year: 2022, km: "15,000", location: "Hà Nội", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb" },
    { id: 2, name: "Hyundai SantaFe", price: "1.250.000.000 đ", year: 2023, km: "5,000", location: "TP. HCM", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2" },
    { id: 3, name: "Honda CR-V L", price: "980.000.000 đ", year: 2021, km: "25,000", location: "Đà Nẵng", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Search Header Section */}
      <section className="bg-red-600 py-12 px-4 text-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Tìm kiếm xe phù hợp với bạn</h1>
          <div className="bg-white p-4 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-4 gap-3">
            <select className="text-gray-700 border p-3 rounded-lg outline-none"><option>Hãng xe (Tất cả)</option></select>
            <select className="text-gray-700 border p-3 rounded-lg outline-none"><option>Giá (Tất cả)</option></select>
            <select className="text-gray-700 border p-3 rounded-lg outline-none"><option>Tình trạng</option></select>
            <button className="bg-black text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800">
              <Search size={20} /> TÌM KIẾM
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Bộ lọc</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Loại xe</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['SUV', 'Sedan', 'Hatchback'].map(t => (
                    <button key={t} className="px-3 py-1 border rounded-full text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition">{t}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Car List */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars.map((car) => (
             <Link href={`/xe/${car.id}`} key={car.id} className="group">
               <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-red-100">
                 {/* ... Giữ nguyên phần hình ảnh và thông tin xe bên trong ... */}
                 <div className="relative h-48 overflow-hidden">
                   <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                 </div>
                 <div className="p-4">
                   <h3 className="font-bold text-lg group-hover:text-red-600 transition">{car.name}</h3>
                   <p className="text-red-600 font-bold text-xl">{car.price}</p>
                   {/* Các thông tin khác */}
                 </div>
                </div>
             </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}