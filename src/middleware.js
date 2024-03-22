import { NextResponse } from "next/server";
export default middleware = (req) => {
  const { pathname } = req.nextUrl;
  if (pathname === "/") {
    return NextResponse.rewrite(new URL('/coming-soon', req.url))
  }
};

export const matcher = ["/"];
