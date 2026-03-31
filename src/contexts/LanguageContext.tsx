import { createContext, useContext, useState } from 'react';
import { translations } from '../utils/translations';

type Language = 'ko' | 'en';

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps): React.ReactElement => {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = (): void => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return (value as string) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
