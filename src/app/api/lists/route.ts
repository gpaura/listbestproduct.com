// src/app/api/auth/route.ts
import NextAuth from "next-auth";
import { authConfig } from "@/lib/config/auth";

// Create a handler using NextAuth with your configuration
const handler = NextAuth(authConfig);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
