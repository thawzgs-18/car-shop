import { NextResponse } from "next/server";
import  prisma  from "@/lib/prisma"; // File khởi tạo prisma client
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  // Bảo vệ API: Chỉ cho phép admin truy cập
  if (session?.user?.email !== "admin@gmail.com") {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const cars = await prisma.car.findMany({
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(cars);
}

// API để Duyệt hoặc Xóa xe
export async function PATCH(req: Request) {
  const { id, status } = await req.json();
  const updatedCar = await prisma.car.update({
    where: { id },
    data: { status }
  });
  return NextResponse.json(updatedCar);
}