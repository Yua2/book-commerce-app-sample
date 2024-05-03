"use client";

import Header from "@/app/components/Header";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

export const NextAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
