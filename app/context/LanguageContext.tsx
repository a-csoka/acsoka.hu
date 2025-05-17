import { createContext, useContext } from 'react';

type LanguageContextType = {
  lang: string;
  translations: Record<string, Record<string, string>>;
  allowedLangs: string[]
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
