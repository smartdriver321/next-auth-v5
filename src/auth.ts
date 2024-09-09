import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [],
});
