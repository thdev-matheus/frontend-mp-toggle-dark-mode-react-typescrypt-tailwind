import { ThemeProvider } from "./theme";
import { ReactNode } from "react";

export const Contexts = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
