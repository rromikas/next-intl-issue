import createMiddleware from "next-intl/middleware";
import { Locale, locales } from "./i18n";
import { localePrefix, pathnames } from "./navigation";

export default createMiddleware({
  locales,
  defaultLocale: Locale.lt,
  localeDetection: false,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
