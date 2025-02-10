import React, { useState } from "react";

interface Context {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<Context | undefined>(undefined);
const UseContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1 className="m-4 text-3xl ">UseContext</h1>
      <h2 className="m-4 text-lg font-bold ">
        useContext hook is used to access the context value from a parent
        component. It is a React feature that allows you to share state and
        values between components without passing props down manually.
      </h2>
      <h3 className="m-4">Simply it is used to eat Work of propsss</h3>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export { UseContext, ThemeContext };
