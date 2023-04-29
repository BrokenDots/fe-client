import { useState } from "react";

function useToggleTheme(): () => void {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
    console.log(theme);
  }
  return toggleTheme;
}

export default useToggleTheme;
