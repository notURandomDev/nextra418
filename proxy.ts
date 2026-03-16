export { proxy } from "nextra/locales";

export const config = {
  // Matcher ignoring `/_next/` and `/api/` and static resources
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.png|opengraph-image.png|icon.svg|apple-icon.png|manifest|_pagefind|images|fonts).*)",
  ],
};
