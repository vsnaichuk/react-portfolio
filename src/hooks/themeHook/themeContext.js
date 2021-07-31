import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  dark: true,
  theme: 'dark',
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const theme = dark ? 'dark' : 'light';

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);

    document.body.classList.toggle('light', !isDark);
    document.body.classList.toggle('dark', isDark);
  }, [dark]);

  const toggle = () => {
    localStorage.setItem('dark', JSON.stringify(!dark));
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
