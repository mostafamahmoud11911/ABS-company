import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./action";
import { Auth, Dashboard } from "./constant/constants";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const session = request.cookies.get("session")?.value;
  const publicRoutes = [Auth.LOGIN];

  const protectedRoutes = [
    Dashboard.DASHBOARD,
    Dashboard.CLIENT,
    Dashboard.SERVICES,
    Dashboard.TOOLS,
    Dashboard.PESTS,
    Dashboard.CONTACTS,
  ];

  if (protectedRoutes.some((route) => route === path) && !session) {
    return NextResponse.redirect(new URL(`${Auth.LOGIN}`, request.url));
  }

  if (publicRoutes.some((route) => route === path) && session) {
    return NextResponse.redirect(new URL(Dashboard.DASHBOARD, request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    "/dashboard/home",
    "/dashboard/clients",
    "/dashboard/services",
    "/dashboard/tools",
    "/dashboard/pests",
    "/dashboard/contacts",
    "/auth/login",
  ],
};
