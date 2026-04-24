import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // THÊM CẤU HÌNH NÀY ĐỂ TRÁNH LỖI 404
  pages: {
    signIn: "/login", // Chỉ định trang đăng nhập tùy chỉnh của bạn
  },
  trustHost: true,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    // ÉP BUỘC QUAY VỀ TRANG CHỦ NẾU ĐĂNG NHẬP THÀNH CÔNG
    async redirect({ url, baseUrl }) {
      // Nếu url là trang đăng nhập, quay về trang chủ
      if (url.includes("/login")) return baseUrl;
      // Mặc định quay về trang chủ hoặc url đích
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
})