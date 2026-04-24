import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { isAdminSession } from "@/lib/admin";

export async function PATCH(request: Request) {
  const session = await auth();
  if (!isAdminSession(session)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id, status } = await request.json();
  const order = await prisma.order.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json(order);
}
