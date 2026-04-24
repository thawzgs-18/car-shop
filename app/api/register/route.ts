import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Thiếu thông tin email hoặc mật khẩu." }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json({ message: "Email này đã được đăng ký." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: "USER",
      },
    });

    return NextResponse.json({
      message: "Đăng ký thành công",
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    return NextResponse.json({ message: "Lỗi hệ thống." }, { status: 500 });
  }
}
