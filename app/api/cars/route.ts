import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      brand,
      price,
      year,
      km,
      type,
      location,
      image,
      status,
      transmission,
      fuel,
      engine,
      description,
      sellerName,
      phoneNumber,
    } = body;

    if (
      !name ||
      !brand ||
      !price ||
      !year ||
      !type ||
      !location ||
      !image ||
      !transmission ||
      !fuel ||
      !engine ||
      !description ||
      !sellerName ||
      !phoneNumber
    ) {
      return NextResponse.json({ message: "Vui lòng điền đầy đủ thông tin bắt buộc." }, { status: 400 });
    }

    const car = await prisma.car.create({
      data: {
        name,
        brand,
        price: Number(price),
        year: Number(year),
        km: Number(km || 0),
        type,
        location,
        image,
        status,
        transmission,
        fuel,
        engine,
        features: ["Chờ cập nhật", "Liên hệ trực tiếp để xem xe"],
        description: `${description}\n\nNgười bán: ${sellerName}\nSố điện thoại: ${phoneNumber}`,
        adminStatus: "pending",
      },
    });

    return NextResponse.json({
      message: "Đã tiếp nhận tin đăng.",
      carId: car.id,
    });
  } catch {
    return NextResponse.json({ message: "Không thể tạo tin đăng." }, { status: 500 });
  }
}
