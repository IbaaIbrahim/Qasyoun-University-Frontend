"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { isRtlLocale } from "@/lib/i18n/locale";

/**
 * Client hook: current locale, RTL flag, and switchLocale for in-place navigation.
 */
export function useLocaleSwitch() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: AppLocale) {
    router.replace(pathname, { locale: next });
  }

  return {
    locale,
    dir: isRtlLocale(locale) ? ("rtl" as const) : ("ltr" as const),
    isRtl: isRtlLocale(locale),
    switchLocale,
  };
}
