import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. Tìm người dùng theo email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return NextResponse.json({ message: "Email không tồn tại" }, { status: 401 });
    }

    // 2. Kiểm tra mật khẩu (So sánh mật khẩu nhập vào với mã hash trong DB)
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: "Mật khẩu không chính xác" }, { status: 401 });
    }

    // 3. Đăng nhập thành công (Ở bước này bạn có thể dùng JWT hoặc NextAuth để lưu phiên)
    return NextResponse.json({ 
      message: "Đăng nhập thành công",
      user: { name: user.name, email: user.email, role: user.role }
    });

  } catch (error) {
    return NextResponse.json({ message: "Lỗi hệ thống" }, { status: 500 });
  }
}