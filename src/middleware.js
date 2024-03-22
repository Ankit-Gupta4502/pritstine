import { NextResponse } from "next/server";
export default middleware = (req) => {
  const { pathname } = req.nextUrl;
  const PUBLIC_FILE = /\.(.*)$/;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    PUBLIC_FILE.test(pathname)
  )
    return NextResponse.next();
  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/coming-soon", req.url));
  }
  if (pathname !== "/") {
    return NextResponse.rewrite(new URL("/coming-soon", req.url));
  }
};

export const matcher = ["/", "//:path*"];
