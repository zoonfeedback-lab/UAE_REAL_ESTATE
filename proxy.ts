import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";

const protectedRoutes = ["/dashboard", "/profile", "/admin"];
const authRoutes = ["/login", "/register"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const tokenObj = request.cookies.get("token");
  const tokenValue = tokenObj?.value;
  const token = (tokenValue && tokenValue !== "" && tokenValue !== "undefined" && tokenValue !== "null") ? tokenValue : null;

  let role = "buyer"; // Default role
  if (token) {
    try {
      const decoded: any = decodeJwt(token);
      role = decoded.role || "buyer";
    } catch (e) {
      console.error("Token decoding failed", e);
    }
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Role-based dashboard mapping
  const dashboardMap: Record<string, string> = {
    admin: "/dashboard/admindashboard",
    seller: "/dashboard/sellerdashboard",
    buyer: "/dashboard/buyerdashboard",
  };

  const userDashboard = dashboardMap[role] || "/dashboard/buyerdashboard";

  // Not logged in and trying to access protected page
  if (!token && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // Logged in and trying to access login/register
  /* NOTE: Temporarily disconnected dashboard redirection
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL(userDashboard, request.url));
  }
  */

  // Logged in but trying to access a generic /dashboard or wrong role dashboard
  /* NOTE: Temporarily disconnected dashboard redirection
  if (token && pathname === "/dashboard") {
    return NextResponse.redirect(new URL(userDashboard, request.url));
  }
  */

  return NextResponse.next();
}


export const config = {
  matcher: [
    /*
     * Run proxy on all routes except:
     * - API routes
     * - Next.js internal files
     * - static files
     * - favicon
     * - images/assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
