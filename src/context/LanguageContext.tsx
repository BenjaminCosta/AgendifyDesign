import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations, type Lang, type TranslationSchema } from "@/i18n/translations";

interface LanguageContextType {
  lang: Lang;
  t: TranslationSchema;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  t: translations.es,
  toggle: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
