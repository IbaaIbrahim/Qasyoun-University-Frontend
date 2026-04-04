import type { ReactNode } from "react";

/**
 * Root layout delegates `<html>` / `<body>` to `app/[locale]/layout.tsx`
 * so `lang` and `dir` match the active locale (next-intl).
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
