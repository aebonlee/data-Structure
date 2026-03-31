import { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'auto' | 'light' | 'dark';
type Theme = 'light' | 'dark';
type ColorTheme = 'blue' | 'red' | 'green' | 'purple' | 'orange';

interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
  colorTheme: ColorTheme;
  setColorTheme: (color: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getTimeBasedTheme = (): Theme => {
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? 'light' : 'dark';
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps): React.ReactElement => {
  const [mode, setMode] = useState<ThemeMode>('auto');
  const [theme, setTheme] = useState<Theme>(() => getTimeBasedTheme());
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue');

  useEffect(() => {
    if (mode !== 'auto') {
      setTheme(mode);
      return;
    }
    setTheme(getTimeBasedTheme());
    const interval = setInterval(() => {
      setTheme(getTimeBasedTheme());
    }, 60000);
    return () => clearInterval(interval);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-color', colorTheme);
  }, [colorTheme]);

  const toggleTheme = (): void => {
    setMode(prev => {
      if (prev === 'auto') return 'light';
      if (prev === 'light') return 'dark';
      return 'auto';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
