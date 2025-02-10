import React, { useContext } from "react";
import { ThemeContext } from "./ContextProvider";
const ThemeButton: React.FC = () => {
  const ThemeContextGetter = useContext(ThemeContext);
  if (!ThemeContextGetter) return null;
  return (
    <div>
      <h1>ThemeButton</h1>
      <button
        onClick={ThemeContextGetter.toggleTheme}
        className={`${
          ThemeContextGetter.theme === "light"
            ? "bg-white text-black"
            : "bg-black text-white"
        } p-4 w-full h-10`}
      >
        Switch to {ThemeContextGetter.theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeButton;
