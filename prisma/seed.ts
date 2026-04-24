import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Xóa dữ liệu cũ để không bị trùng
  await prisma.order.deleteMany({});
  await prisma.news.deleteMany({});
  await prisma.car.deleteMany({});

  const admin = await prisma.user.upsert({
    where: { email: 'admin@carshop.com' },
    update: {},
    create: {
      email: 'admin@carshop.com',
      name: 'Phạm Văn Thắng',
      password: 'admin123',
      role: 'ADMIN',
    },
  });

  console.log('--- Đang nạp dữ liệu xe từ Doc1.docx ---');

  const cars = [
    {
      name: 'Ford Ranger Wildtrak',
      brand: 'Ford',
      price: 965000000,
      year: 2023,
      km: 0,
      type: 'Pickup',
      location: 'Bình Dương',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800',
      status: 'Mới',
      transmission: 'Tự động 10 cấp',
      fuel: 'Dầu (Diesel)',
      engine: 'Bi-Turbo 2.0L',
      features: ['Hệ thống SYNC 4', 'Camera 360 độ'],
      description: 'Vua bán tải với khả năng vận hành mạnh mẽ.',
      adminStatus: 'approved'
    },
    {
      name: 'Mazda CX-5 Premium',
      brand: 'Mazda',
      price: 829000000,
      year: 2022,
      km: 15000,
      type: 'SUV',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800',
      status: 'Đã sử dụng',
      transmission: 'Tự động 6 cấp',
      fuel: 'Xăng',
      engine: '2.5L SkyActiv-G',
      features: ['Loa Bose', 'Cửa sổ trời'],
      description: 'Xe gia đình giữ gìn kỹ, bảo dưỡng chính hãng.',
      adminStatus: 'approved'
    }
    // Bạn có thể thêm các xe Toyota, Hyundai, KIA tương tự vào đây
  ];

  for (const car of cars) {
    await prisma.car.create({ data: car });
  }

  await prisma.news.create({
    data: {
      title: 'Kinh nghiệm kiểm tra xe cũ trước khi mua',
      slug: 'kinh-nghiem-xe-cu',
      content: 'Nội dung chi tiết từ tài liệu của bạn...',
      authorId: admin.id,
    }
  });

  console.log('--- Seed thành công! ---');
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());