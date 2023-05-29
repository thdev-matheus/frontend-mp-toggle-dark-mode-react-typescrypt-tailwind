import { useState } from "react";
import * as T from "./types";
import { FaSun, FaMoon } from "react-icons/fa";
import slideSound from "../../assets/sounds/slide.mp3";

export default function SwitchDarkMode({ switchAction }: T.ISwitchProps) {
  const [isActive, setIsActive] = useState(
    localStorage.getItem("@TDM-THEME") === "light" ? false : true
  );

  const slide = new Audio(slideSound);

  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
        switchAction();
        slide.play();
      }}
      className={`flex items-center w-10 h-5 transition duration-300 ${
        isActive ? "bg-white" : "bg-zinc-200"
      } shadow-2xl md:w-10 md:h-5 rounded-2xl focus:outline-none`}
    >
      <div
        className={`w-6 h-6 p-1 text-white transition duration-500 transform ${
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
