import { CARS } from "../../data/cars";
import { MapPin, Calendar, Gauge, Fuel, Phone, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

// Thêm async vào function
export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  // Giải nén params bằng await
  const { id } = await params;

  // Tìm xe và ép kiểu id về string để so sánh chính xác
  const car = CARS.find((c) => String(c.id) === String(id));

  if (!car) return notFound();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Khối hình ảnh */}
        <div className="relative h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50 border border-gray-100">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-6 left-6 bg-red-600 text-white px-5 py-1.5 rounded-full font-bold uppercase text-xs tracking-widest shadow-lg">
            {car.status}
          </div>
        </div>

        {/* Khối thông tin */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-gray-500 mb-3 font-medium">
            <MapPin size={20} className="text-red-500" />
            <span>{car.location}</span>
          </div>
          
          <h1 className="text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter italic leading-none">
            {car.name}
          </h1>

          <div className="text-4xl font-bold text-red-600 mb-10 flex items-baseline gap-1">
            {car.price.toLocaleString('vi-VN')} 
            <span className="text-xl">VNĐ</span>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm text-center">
              <Calendar className="mx-auto text-red-500 mb-3" size={24} />
              <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Đời xe</div>
              <div className="font-extrabold text-gray-800 text-lg">{car.year}</div>
            </div>
            
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm text-center">
              <Gauge className="mx-auto text-red-500 mb-3" size={24} />
              <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Số KM</div>
              <div className="font-extrabold text-gray-800 text-lg">
                {car.km === 0 ? "Mới" : `${car.km.toLocaleString()} km`}
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm text-center">
              <Fuel className="mx-auto text-red-500 mb-3" size={24} />
              <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Kiểu xe</div>
              <div className="font-extrabold text-gray-800 text-lg">{car.type}</div>
            </div>
          </div>

          <a 
            href="tel:0865372637"
            className="w-full bg-red-600 hover:bg-black text-white py-6 rounded-2xl font-black text-2xl transition-all flex items-center justify-center gap-4"
          >
            <Phone size={28} />
            LIÊN HỆ NGAY: 0865.372.637
          </a>
        </div>
      </div>

      {/* Phần mô tả mở rộng đã được nâng cấp */}
<div className="border-t border-gray-100 pt-16">
  <div className="max-w-4xl">
    <h2 className="text-3xl font-black mb-8 italic uppercase tracking-tight text-gray-900 border-l-8 border-red-600 pl-4">
      Đặc điểm & Thông số kỹ thuật
    </h2>
    
    <div className="text-gray-600 text-xl leading-relaxed space-y-6 font-medium">
      <p>
        Chúng tôi hân hạnh giới thiệu mẫu xe **{car.brand} {car.name}** phiên bản năm **{car.year}**, một biểu tượng của sự kết hợp hoàn hảo giữa hiệu suất vận hành mãnh liệt và thiết kế sang trọng. 
        Hiện tại, chiếc xe này đang ở tình trạng **{car.status.toLowerCase()}** và đã được đội ngũ kỹ thuật của CARSHOP kiểm định nghiêm ngặt qua 160 điểm chi tiết để đảm bảo chất lượng tốt nhất khi bàn giao.
      </p>
      
      <p>
        Về thông số vận hành, xe thuộc dòng **{car.type}** với khả năng thích nghi linh hoạt trên nhiều địa hình khác nhau, đặc biệt phù hợp với điều kiện giao thông tại **{car.location}**. 
        Với số Kilomet đã đi là **{car.km === 0 ? "0km (xe mới hoàn toàn)" : `${car.km.toLocaleString()} km`}**, hệ thống động cơ và khung gầm vẫn giữ được độ nguyên bản, mang lại cảm giác lái chắc chắn và êm ái như những ngày đầu.
      </p>

      <p>
        Nội thất của {car.name} được trang bị các công nghệ hiện đại hàng đầu phân khúc, bao gồm hệ thống giải trí đa phương tiện, các tính năng an toàn chủ động và không gian ngồi rộng rãi, tối ưu hóa sự thoải mái cho mọi hành trình dài. 
        Quý khách hàng hoàn toàn có thể yên tâm về tính pháp lý khi xe có hồ sơ minh bạch, sẵn sàng sang tên ngay trong ngày.
      </p>
      
      <p>
        Đừng bỏ lỡ cơ hội sở hữu chiếc {car.brand} đẳng cấp này với mức giá cực kỳ cạnh tranh là **{car.price.toLocaleString('vi-VN')} VNĐ**. 
        Hãy liên hệ ngay với đội ngũ tư vấn của CARSHOP qua hotline hoặc đến trực tiếp showroom tại {car.location} để trải nghiệm lái thử và nhận những ưu đãi đặc quyền dành riêng cho bạn.
      </p>
    </div>
  </div>
</div>
    </div>
  );
}