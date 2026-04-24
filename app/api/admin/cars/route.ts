import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { isAdminSession } from "@/lib/admin";

export async function GET() {
  const session = await auth();
  if (!isAdminSession(session)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(cars);
}

export async function PATCH(request: Request) {
  const session = await auth();
  if (!isAdminSession(session)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id, adminStatus } = await request.json();
  const updatedCar = await prisma.car.update({
    where: { id },
    data: { adminStatus },
  });

  return NextResponse.json(updatedCar);
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!isAdminSession(session)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await request.json();
  await prisma.order.deleteMany({
    where: { carId: id },
  });
  await prisma.car.delete({
    where: { id },
  });

  return NextResponse.json({ ok: true });
}
