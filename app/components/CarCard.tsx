import { MapPin, Calendar, Gauge } from "lucide-react";
import Link from "next/link";

export default function CarCard({ car }: { car: any }) {
  return (
    <Link href={`/xe/${car.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-52 overflow-hidden bg-gray-200">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] px-2 py-1 rounded shadow-sm font-bold uppercase tracking-wider">
          {car.status || "Sẵn có"}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-red-600 transition line-clamp-1">
          {car.name}
        </h3>
        <p className="text-red-600 font-black text-xl mb-4">
          {car.price?.toLocaleString('vi-VN')} đ
        </p>
        
        <div className="grid grid-cols-2 gap-y-3 mt-auto pt-4 border-t border-gray-50 text-gray-500 font-medium text-[11px]">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-gray-400" /> {car.year}
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge size={14} className="text-gray-400" /> {car.km?.toLocaleString() || "0"} km
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <MapPin size={14} className="text-gray-400" /> {car.location}
          </div>
        </div>
      </div>
    </Link>
  );
}