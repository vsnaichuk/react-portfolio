import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

const DARK_LOCAL_STORAGE_KEY = 'dark';

export const ThemeContext = createContext({
  dark: true,
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true); // dark by default

  const toggleTheme = useCallback(() => {
    setDark((prevDark) => {
      localStorage.setItem(
        DARK_LOCAL_STORAGE_KEY,
        JSON.stringify(!prevDark),
      );

      document.body.classList.toggle('dark', !prevDark);
      document.body.classList.toggle('light', prevDark);

      return !prevDark;
    });
  }, []);

  useEffect(() => {
    const localValue = JSON.parse(
      localStorage.getItem(DARK_LOCAL_STORAGE_KEY),
    );

    if (localValue === null) {
      document.body.classList.add('dark');
    } else {
      setDark(localValue);
      document.body.classList.add(localValue ? 'dark' : 'light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
