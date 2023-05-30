import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import click1Sound from "../../assets/sounds/click1.wav";
import click2Sound from "../../assets/sounds/click2.wav";

export default function SwitchDarkMode() {
  const [isActive, setIsActive] = useState(
    localStorage.getItem("@TDM-THEME") === "light" ? false : true
  );

  const localTheme = localStorage.getItem("@TDM-THEME");

  const click1 = new Audio(click1Sound);
  const click2 = new Audio(click2Sound);

  const toggleTheme = () => {
    if (localTheme === "light") {
      localStorage.setItem("@TDM-THEME", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("@TDM-THEME", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
        toggleTheme();
        isActive ? click2.play() : click1.play();
      }}
      className={`flex items-center w-10 h-5 transition duration-300 ${
        isActive ? "bg-white" : "bg-zinc-200"
      } shadow-inner md:w-10 md:h-5 rounded-2xl focus:outline-none`}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center p-1 text-white transition duration-500 transform ${
          isActive
            ? "bg-gray-700 translate-x-full"
            : "-translate-x-2 bg-yellow-500"
        } rounded-full md:w-7 md:h-7`}
      >
        {isActive ? (
          <FaMoon className="fadeindark" />
        ) : (
          <FaSun className="fadeinlight" />
        )}
      </div>
    </button>
  );
}
