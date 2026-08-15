"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { isRtlLocale } from "@/lib/i18n/locale";

export const LOCALE_STORAGE_KEY = "NEXT_LOCALE";

export function setStoredLocale(locale: AppLocale) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      localStorage.setItem("preferredLocale", locale);
    } catch {
      // ignore storage access restrictions
    }
    document.cookie = `${LOCALE_STORAGE_KEY}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  }
}

export function getStoredLocale(): AppLocale | null {
  if (typeof window !== "undefined") {
    try {
      const stored =
        localStorage.getItem(LOCALE_STORAGE_KEY) ||
        localStorage.getItem("preferredLocale");
      if (stored === "ar" || stored === "en") {
        return stored;
      }
    } catch {
      // ignore storage access restrictions
    }
  }
  return null;
}

/**
 * Client hook: current locale, RTL flag, and switchLocale for in-place navigation.
 */
export function useLocaleSwitch() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: AppLocale) {
    if (next === locale) return;
    setStoredLocale(next);
    if (typeof window !== "undefined") {
      const search = window.location.search;
      const hash = window.location.hash;
      const target = `${pathname}${search}${hash}`;
      router.replace(target, { locale: next });
    } else {
      router.replace(pathname, { locale: next });
    }
  }

  return {
    locale,
    dir: isRtlLocale(locale) ? ("rtl" as const) : ("ltr" as const),
    isRtl: isRtlLocale(locale),
    switchLocale,
  };
}
