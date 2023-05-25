import { createContext, useContext, useState, useEffect } from "react";
import * as T from "./types";

const ThemeContext = createContext<T.IThemeContext>({} as T.IThemeContext);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};

export const ThemeProvider = ({ children }: T.IThemeProvider) => {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
