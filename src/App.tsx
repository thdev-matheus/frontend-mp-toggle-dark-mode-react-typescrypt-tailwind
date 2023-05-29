import { useTheme } from "./contexts/theme";

export const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <button
        onClick={toggleTheme}
        className={`${theme === "dark" ? "text-white" : "text-black"}`}
      >
        mudar
      </button>
    </div>
  );
};
