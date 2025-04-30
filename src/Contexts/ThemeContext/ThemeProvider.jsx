import React, { createContext, useState } from "react";

//make theme context
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  let toglleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toglleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
