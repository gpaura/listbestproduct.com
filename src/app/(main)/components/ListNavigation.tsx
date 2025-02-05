"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ListNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/lists/electronics/smartphones", label: "Smartphones" },
    { href: "/lists/electronics/laptops", label: "Laptops" },
  ];

  return (
    <nav className="flex gap-4 mb-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href ? "border-b-2 border-primary" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
