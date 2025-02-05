import NextAuth from "next-auth";
import { authConfig } from "@/lib/config/auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
