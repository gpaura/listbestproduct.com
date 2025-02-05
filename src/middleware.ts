import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is under '/admin'
  if (pathname.startsWith("/admin")) {
    // Check for a session token (adjust the cookie name as needed)
    const token =
      request.cookies.get("next-auth.session-token") ||
      request.cookies.get("__Secure-next-auth.session-token");
    if (!token) {
      // If not authenticated, redirect to the sign-in page.
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Apply the middleware to admin routes.
  matcher: ["/admin/:path*"],
};
