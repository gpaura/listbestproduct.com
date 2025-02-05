"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold">
          ListBestProduct
        </Link>
        <nav>
          {session ? (
            <button onClick={() => signOut()} className="btn btn-secondary">
              Sign Out
            </button>
          ) : (
            <Link href="/auth/sign-in" className="btn btn-primary">
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
