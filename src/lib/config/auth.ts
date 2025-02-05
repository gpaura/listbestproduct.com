import type { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    // Since we don't need any of the parameters for custom logic, we can simply omit them.
    async signIn() {
      // Allow all sign-ins (you can add custom logic here if needed)
      return true;
    },
    async session({ session }) {
      // Return the session object as is
      return session;
    },
  },
  providers: [],
};
