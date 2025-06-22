import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();

  const anichartUsername = cookieStore.get("anichart-username");
  const anichartJobTitle = cookieStore.get("anichart-job-title");

  if (
    pathname !== "/unauthorised" &&
    (!anichartUsername || !anichartJobTitle)
  ) {
    return NextResponse.redirect(new URL("/unauthorised", request.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
