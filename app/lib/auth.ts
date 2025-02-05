import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        // Add your authentication logic here
        const user = { id: "1", name: "Admin", email: "admin@example.com" };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
};

export default NextAuth(authOptions);
