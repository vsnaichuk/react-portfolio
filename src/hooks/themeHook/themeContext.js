import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  dark: true,
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    localStorage.setItem('dark', JSON.stringify(!dark));
    setDark(!dark);

    document.body.classList.toggle('dark', !dark);
    document.body.classList.toggle('light', dark);
  };

  useEffect(() => {
    const localeDark = JSON.parse(localStorage.getItem('dark'));

    if (typeof localeDark !== 'boolean')
      document.body.classList.add(dark ? 'dark' : 'light');
    else {
      setDark(localeDark);
      document.body.classList.add(localeDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
