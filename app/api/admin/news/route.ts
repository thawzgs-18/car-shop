import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { isAdminSession } from "@/lib/admin";

export async function POST(request: Request) {
  const session = await auth();
  if (!isAdminSession(session)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { title, slug, image, content } = await request.json();
  if (!title || !slug || !content || !session?.user?.email) {
    return NextResponse.json({ message: "Thiếu dữ liệu." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const news = await prisma.news.create({
    data: {
      title,
      slug,
      image: image || null,
      content,
      authorId: user.id,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return NextResponse.json(news);
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!isAdminSession(session)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await request.json();
  await prisma.news.delete({
    where: { id },
  });

  return NextResponse.json({ ok: true });
}
