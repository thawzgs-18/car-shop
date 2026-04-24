import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { CARS } = require("../app/data/cars");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { EXTRA_CARS } = require("../app/data/extra-cars");

const prisma = new PrismaClient();

async function main() {
  await prisma.order.deleteMany({});
  await prisma.news.deleteMany({});
  await prisma.car.deleteMany({});

  const hashedPassword = await bcrypt.hash("admin123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@carshop.com" },
    update: {
      password: hashedPassword,
      role: "ADMIN",
    },
    create: {
      email: "admin@carshop.com",
      name: "Pham Van Thang",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  for (const car of [...CARS, ...EXTRA_CARS]) {
    await prisma.car.create({
      data: {
        ...car,
        adminStatus: "approved",
      },
    });
  }

  await prisma.news.createMany({
    data: [
      {
        title: "Toyota Camry 2025 chinh thuc lo dien voi thiet ke dot pha",
        slug: "toyota-camry-2025-lo-dien",
        content:
          "Toyota Camry 2025 buoc sang ngon ngu thiet ke tre trung hon, bo sung nhieu cong nghe an toan va giu the manh ve do ben, do em cung kha nang giu gia.",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1200",
        authorId: admin.id,
      },
      {
        title: "VinFast VF8 tiep tuc ghi diem o nhom SUV dien co D",
        slug: "vinfast-vf8-ghi-diem-o-nhom-suv-dien",
        content:
          "VF8 dang la mot trong nhung lua chon noi bat o phan khuc SUV dien nho thiet ke hien dai, nhieu cong nghe ho tro lai va he sinh thai sac phu rong hon truoc.",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200",
        authorId: admin.id,
      },
      {
        title: "5 diem can kiem tra truoc khi xuong tien mua xe cu",
        slug: "5-diem-can-kiem-tra-khi-mua-xe-cu",
        content:
          "Khi mua xe cu, nguoi dung can uu tien kiem tra lich su bao duong, he thong khung gam, tinh trang dong co, giay to phap ly va do dong deu cua nuoc son.",
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200",
        authorId: admin.id,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
