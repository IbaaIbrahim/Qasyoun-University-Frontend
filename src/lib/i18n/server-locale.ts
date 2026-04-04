import { getLocale } from "next-intl/server";
import { isRtlLocale } from "@/lib/i18n/locale";
import type { AppLocale } from "@/i18n/routing";

/** Server Components: current locale and text direction. */
export async function getServerLocaleInfo() {
  const locale = (await getLocale()) as AppLocale;
  return {
    locale,
    dir: isRtlLocale(locale) ? ("rtl" as const) : ("ltr" as const),
    isRtl: isRtlLocale(locale),
  };
}
