import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    // 1. Kiểm tra dữ liệu đầu vào
    if (!email || !password) {
      return new NextResponse("Thiếu thông tin email hoặc mật khẩu", { status: 400 });
    }

    // 2. Kiểm tra email đã tồn tại chưa
    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      return new NextResponse("Email này đã được đăng ký", { status: 400 });
    }

    // 3. Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 12);

    // 4. Lưu vào Database
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: "USER", // Mặc định là khách hàng
      }
    });

    return NextResponse.json({ message: "Đăng ký thành công", user: { email: user.email, name: user.name } });

  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    return new NextResponse("Lỗi hệ thống", { status: 500 });
  }
}