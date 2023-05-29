import { createContext, useContext, useState, useEffect } from "react";
import * as T from "./types";

const ThemeContext = createContext<T.IThemeContext>({} as T.IThemeContext);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export const ThemeProvider = ({ children }: T.IThemeProvider) => {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  const localTheme = localStorage.getItem("@TDM-THEME");

  useEffect(() => {
    if (!localTheme) {
      setTheme("light");
      localStorage.setItem("@TDM-THEME", "light");
    } else if (localTheme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("@TDM-THEME", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("@TDM-THEME", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
