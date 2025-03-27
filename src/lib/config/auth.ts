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

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // Example of an OAuth provider (Google)
    // You need to add the env variables
    /*
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    */
    // ...add more providers here
  ],
  // ...add more options here
  secret: process.env.NEXTAUTH_SECRET, // add a secret key
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
  },
};
