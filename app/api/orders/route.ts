import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, phoneNumber, message, carId } = body;

    if (!customerName || !phoneNumber || !carId) {
      return NextResponse.json({ message: "Vui lòng điền đầy đủ thông tin." }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        customerName,
        phoneNumber,
        message,
        carId,
      },
    });

    return NextResponse.json(order);
  } catch {
    return NextResponse.json({ message: "Không thể tạo yêu cầu." }, { status: 500 });
  }
}
