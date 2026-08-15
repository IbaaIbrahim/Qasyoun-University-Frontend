"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getStoredLocale, setStoredLocale } from "@/hooks/use-locale-switch";

/**
 * Synchronizes the active locale to localStorage and document.cookie.
 * If an unprefixed URL was loaded (Arabic by default) but localStorage contains
 * an explicit English preference, it redirects to the English version.
 */
export default function LocaleSync() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const hasCheckedStorageRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!hasCheckedStorageRef.current) {
      hasCheckedStorageRef.current = true;
      const storedLocale = getStoredLocale();

      // If user had previously chosen English in storage, but landed on an unprefixed route (Arabic)
      // due to missing cookie, honor storage preference by redirecting to English.
      if (storedLocale === "en" && locale === "ar") {
        setStoredLocale("en");
        router.replace(pathname, { locale: "en" });
        return;
      }
    }

    // Keep storage & cookie in sync with active locale
    setStoredLocale(locale);
  }, [locale, pathname, router]);

  return null;
}
