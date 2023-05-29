import { useTheme } from "./contexts/theme";
import * as C from "./components";

export const App = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <C.SwitchDarkMode switchAction={toggleTheme} />
    </div>
  );
};
