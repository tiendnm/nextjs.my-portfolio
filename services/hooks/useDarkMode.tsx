import { useEffect, useState } from "react";

export function useDarkMode() {
  let darkMode = false;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    darkMode = localStorage.getItem("darkMode") === "true";
  }
  const [isDarkMode, SetIsDarkMode] = useState<boolean>(darkMode);
  const ToggleDarkMode = () => {
    SetIsDarkMode((prev) => !prev);
  };
  useEffect(() => {
    document.documentElement.className = isDarkMode ? "dark" : "";
    localStorage.setItem("darkMode", `${isDarkMode}`);
  }, [isDarkMode]);
  return {
    isDarkMode,
    ToggleDarkMode,
  };
}
