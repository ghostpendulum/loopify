import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getStudioAuthUrl } from "@/lib/site";

export const middleware = (request: NextRequest) => {
  const url = request.nextUrl;
  const { pathname } = url;

  if (pathname === "/") {
    const auth = url.searchParams.get("auth");
    if (auth === "signup" || auth === "login") {
      return NextResponse.redirect(getStudioAuthUrl(auth));
    }
  }

  if (pathname === "/signup") {
    return NextResponse.redirect(getStudioAuthUrl("signup"));
  }
  if (pathname === "/login") {
    return NextResponse.redirect(getStudioAuthUrl("login"));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/signup", "/login"],
};
