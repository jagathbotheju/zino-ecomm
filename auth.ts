import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import { Adapter } from "next-auth/adapters";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
        },
      },
    }),
  ],
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/auth/login",
  },
});
