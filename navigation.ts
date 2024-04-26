import { createLocalizedPathnamesNavigation, Pathnames } from "next-intl/navigation";
import { Locale } from "./i18n";

export const locales = [Locale.en, Locale.lt];
export const localePrefix = "as-needed";

export const pathnames = {
  "/": "/",
  "/registration/expert": {
    en: "/registration/expert",
    lt: "/registracija/ekspertas",
  },
  "/registration/applicant": {
    en: "/registration/applicant",
    lt: "/registracija/pareiskejas",
  },
  "/registration/coordinator": {
    en: "/registration/coordinator",
    lt: "/registracija/koordinatorius",
  },
  "/registration/admin": {
    en: "/registration/admin",
    lt: "/registracija/administratorius",
  },
  "/login/expert": {
    en: "/login/expert",
    lt: "/prisijungti/ekspertas",
  },
  "/login/coordinator": {
    en: "/login/coordinator",
    lt: "/prisijungti/koordinatorius",
  },
  "/login/applicant": {
    en: "/login/applicant",
    lt: "/prisijungti/pareiskejas",
  },
  "/login/admin": {
    en: "/login/admin",
    lt: "/prisijungti/administratorius",
  },
  "/expert": {
    en: "/expert",
    lt: "/ekspertas",
  },
  "/coordinator": {
    en: "/coordinator",
    lt: "/koordinatorius",
  },
  "/applicant": {
    en: "/applicant",
    lt: "/pareiskejas",
  },
  "/admin": {
    en: "/admin",
    lt: "/administratorius",
  },
  "/admin/contests": {
    en: "/admin/contests",
    lt: "/administratorius/konkursai",
  },
  "/admin/contests/new": {
    en: "/admin/contests/new",
    lt: "/administratorius/konkursai/naujas",
  },
  "/admin/experts": {
    en: "/admin/experts",
    lt: "/administratorius/ekspertai",
  },
  "/admin/experts/new": {
    en: "/admin/experts/new",
    lt: "/administratorius/ekspertai/naujas",
  },
  "/admin/experts/[id]": {
    en: "/admin/experts/[id]",
    lt: "/administratorius/ekspertai/[id]",
  },
  "/admin/coordinators": {
    en: "/admin/coordinators",
    lt: "/administratorius/koordinatoriai",
  },
  "/admin/coordinators/new": {
    en: "/admin/coordinators/new",
    lt: "/administratorius/koordinatoriai/naujas",
  },
  "/admin/coordinators/[id]": {
    en: "/admin/coordinators/[id]",
    lt: "/administratorius/koordinatoriai/[id]",
  },
  "/admin/applicants": {
    en: "/admin/applicants",
    lt: "/administratorius/pareiskejai",
  },
  "/admin/applicants/new": {
    en: "/admin/applicants/new",
    lt: "/administratorius/pareiskejai/naujas",
  },
  "/admin/applicants/[id]": {
    en: "/admin/applicants/[id]",
    lt: "/administratorius/pareiskejai/[id]",
  },
  "/admin/admins": {
    en: "/admin/admins",
    lt: "/administratorius/administratoriai",
  },
  "/admin/admins/new": {
    en: "/admin/admins/new",
    lt: "/administratorius/administratoriai/naujas",
  },
  "/admin/admins/[id]": {
    en: "/admin/admins/[id]",
    lt: "/administratorius/administratoriai/[id]",
  },
} satisfies Pathnames<typeof locales>;

export const { redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames,
});
