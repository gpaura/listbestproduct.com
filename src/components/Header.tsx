"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-base-100 shadow-sm">
      <nav className="navbar container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            ListBestProduct
          </Link>
        </div>

        <div className="flex-none gap-4">
          <ThemeToggle />

          {session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-10">
                  <span>{session.user?.name?.[0]}</span>
                </div>
              </div>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/settings/preferences">Settings</Link>
                </li>
                <li>
                  <button onClick={() => signOut()}>Sign Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/auth/sign-in" className="btn btn-primary">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
