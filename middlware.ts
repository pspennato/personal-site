import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar archivos estáticos y API
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.includes("/favicon")
  ) {
    return;
  }

  // Verificar si la URL ya tiene un locale válido
  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!hasLocale) {
    // Detectar idioma del navegador
    const acceptLang = request.headers.get("accept-language");
    const browserLang = acceptLang?.split(",")[0].split("-")[0] || defaultLocale;

    const localeToUse = locales.includes(browserLang) ? browserLang : defaultLocale;

    // Redirigir preservando el path original
    return NextResponse.redirect(
      new URL(`/${localeToUse}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // intercepta todas las rutas menos assets
};
