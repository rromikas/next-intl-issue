import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export enum Locale {
  en = "en",
  lt = "lt",
}

export const locales: Locale[] = [Locale.en, Locale.lt];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
