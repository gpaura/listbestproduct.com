"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to access your preferences</p>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <button
            onClick={() =>
              signIn("credentials", {
                email: "user@example.com",
                callbackUrl,
              })
            }
            className="btn btn-primary w-full mb-4"
          >
            Continue with Email
          </button>

          <div className="divider">OR</div>

          <button
            onClick={() => signIn("google", { callbackUrl })}
            className="btn btn-outline w-full"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
