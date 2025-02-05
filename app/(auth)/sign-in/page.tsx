"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <button
        onClick={() =>
          signIn("credentials", {
            email: "user@example.com",
            password: "password",
            callbackUrl: "/",
          })
        }
        className="btn btn-primary w-full"
      >
        Sign in with Email
      </button>
    </div>
  );
}
