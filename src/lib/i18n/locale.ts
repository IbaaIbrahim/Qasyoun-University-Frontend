import type { AppLocale } from "@/i18n/routing";

export const RTL_LOCALES: readonly AppLocale[] = ["ar"];

export function isRtlLocale(locale: string): boolean {
  return (RTL_LOCALES as readonly string[]).includes(locale);
}
