import { ReactNode } from "react";

export interface IThemeContext {
  theme: "dark" | "light" | null;

  toggleTheme: () => void;
}

export interface IThemeProvider {
  children: ReactNode;
}
