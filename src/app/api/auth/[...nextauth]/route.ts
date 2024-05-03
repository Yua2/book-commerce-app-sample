import { nextAuthOptions } from "@/app/lib/next-auth/options";
import next from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
