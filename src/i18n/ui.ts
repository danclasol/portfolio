import { getI18n } from "@i18n/index";
import SpainFlagIcon from "@components/icons/SpainFlagIcon.astro";
import EnglishFlagIcon from "@components/icons/EnglishFlagIcon.astro";

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof EnglishFlagIcon }
> = {
  en: {
    code: "en",
    name: "EN",
    flag: EnglishFlagIcon,
  },
  es: {
    code: "es",
    name: "ES",
    flag: SpainFlagIcon,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

const i18nES = getI18n({ currentLocale: "es" });
const i18nEN = getI18n({ currentLocale: "en" });

export const ui = {
  es: {
    "nav.home": `${i18nES.HEADER_HOME}`,
    "nav.experience": `${i18nES.HEADER_EXPERIENCE}`,
    "nav.projects": `${i18nES.HEADER_PROJECTS}`,
    "nav.about-me": `${i18nES.HEADER_ABOUT_ME}`,
    "nav.contact": `${i18nES.HEADER_CONTACT}`,
  },
  en: {
    "nav.home": `${i18nEN.HEADER_HOME}`,
    "nav.experience": `${i18nEN.HEADER_EXPERIENCE}`,
    "nav.projects": `${i18nEN.HEADER_PROJECTS}`,
    "nav.about-me": `${i18nEN.HEADER_ABOUT_ME}`,
    "nav.contact": `${i18nEN.HEADER_CONTACT}`,
  },
} as const;

export const routes = {
  es: {
    home: `/#${i18nES.ROUTE_HOME}`,
    experience: `/#${i18nES.ROUTE_EXPERIENCE}`,
    projects: `/#${i18nES.ROUTE_PROJECTS}`,
    "about-me": `/#${i18nES.ROUTE_ABOUT_ME}`,
    contact: `/#${i18nES.ROUTE_CONTACT}`,
  },
  en: {
    home: `/en/#${i18nEN.ROUTE_HOME}`,
    experience: `/en/#${i18nEN.ROUTE_EXPERIENCE}`,
    projects: `/en/#${i18nEN.ROUTE_PROJECTS}`,
    "about-me": `/en/#${i18nEN.ROUTE_ABOUT_ME}`,
    contact: `/en/#${i18nEN.ROUTE_CONTACT}`,
  },
};
