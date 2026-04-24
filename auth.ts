import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

type AppUserLike = {
  id?: string;
  role?: string;
};

type AppTokenLike = {
  id?: string;
  role?: string;
};

const providers: Array<ReturnType<typeof Credentials> | ReturnType<typeof Google>> = [
  Credentials({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials.password) {
        return null;
      }

      const user = await prisma.user.findUnique({
        where: { email: String(credentials.email) },
      });

      if (!user) {
        return null;
      }

      const isValid = await bcrypt.compare(String(credentials.password), user.password);
      if (!isValid) {
        return null;
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
    },
  }),
];

if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
  providers.push(
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    })
  );
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: "/login",
  },
  trustHost: true,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as AppUserLike).id;
        token.role = (user as AppUserLike).role;
      }
      return token as typeof token & AppTokenLike;
    },
    async session({ session, token }) {
      if (session.user) {
        const typedToken = token as AppTokenLike;
        if (typedToken.id) {
          (session.user as typeof session.user & { id?: string }).id = typedToken.id;
        }
        if (typedToken.role) {
          (session.user as typeof session.user & { role?: string }).role = typedToken.role;
        }
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.includes("/login")) return baseUrl;
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
});
