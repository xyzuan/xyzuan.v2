import { NextRequest, NextResponse } from "next/server";
import { getMyProfile } from "./services/profile";

const isAdmin = async (token: string): Promise<boolean> => {
  try {
    const response = await getMyProfile(token);
    const data = await response.json();
    return data.isAdmin;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return false;
  }
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_session")?.value || "";
  const { pathname } = req.nextUrl;

  // Directly redirect if token exists and path starts with /auth
  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Perform synchronous redirection based on the token and path
  if (!token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Check admin status (if asynchronous checks are needed, handle them server-side)
  // Note: Direct async checks like this won't work within middleware directly
  try {
    const adminStatus = await isAdmin(token);
    if (token && !adminStatus && pathname.startsWith("/admin")) {
      return NextResponse.json({
        message: "=== UNAUTHORIZED ACCESS ===",
      });
    }
  } catch (error) {
    console.error("Error checking admin status:", error);
    // Handle error scenario
  }

  return NextResponse.next();
}
