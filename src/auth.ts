import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

import prisma from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  theme: {
    logo: "/logo.png",
  },
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    Google,
    GitHub,
    Resend({
      from: "no-reply@onboarding@resend.dev",
    }),
  ],
});
