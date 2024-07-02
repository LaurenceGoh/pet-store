import { NextResponse, NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const middleware = async (req: NextRequest) => {
  const {getPermission} = getKindeServerSession();
  const adminPermission = await getPermission("admin-permissions");
  if (!adminPermission?.isGranted) {
    return NextResponse.redirect(new URL("/api/auth/login?post_login_redirect_url=/admin" , req.url));
  }
  return NextResponse.next();

}

export const config = {
  matcher : "/admin"
}
