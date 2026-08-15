import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // If no NEXT_LOCALE cookie is set, remove accept-language header
  // to ensure fallback to defaultLocale ('ar') instead of auto-detecting client browser language.
  if (!request.cookies.has("NEXT_LOCALE")) {
    const headers = new Headers(request.headers);
    headers.delete("accept-language");
    const modifiedRequest = new NextRequest(request.url, {
      headers,
    });
    return intlMiddleware(modifiedRequest);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
