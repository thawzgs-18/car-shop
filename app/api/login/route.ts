import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: "Email không tồn tại" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Mật khẩu không chính xác" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Đăng nhập thành công",
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch {
    return NextResponse.json({ message: "Lỗi hệ thống" }, { status: 500 });
  }
}
