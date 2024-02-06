export const LANGUAGES: Record<string, { code: string; name: string }> = {
  en: {
    code: "en",
    name: "English",
  },
  es: {
    code: "es",
    name: "Español",
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.experiencia": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about-me": "Sobre mí",
    "nav.contact": "Contacto",
  },
  en: {
    "nav.home": "Home",
    "nav.experiencia": "Experience",
    "nav.projects": "Projects",
    "nav.about-me": "About me",
    "nav.contact": "Contact",
  },
} as const;

export const routes = {
  es: {
    experience: "experiencia",
    projects: "proyectos",
    "about-me": "sobre-mi",
    contact: "contacto",
  },
  en: {
    experience: "experience",
    projects: "projects",
    "about-me": "about-me",
    contact: "contact",
  },
};
