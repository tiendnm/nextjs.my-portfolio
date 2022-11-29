"use client";
import { useCallback, useEffect, useState } from "react";

export function useDarkMode() {
  const [isDarkMode, SetIsDarkMode] = useState<boolean>(false); // first load is light
  const ToggleDarkMode = useCallback(() => {
    SetIsDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    const isLocalDarkMode = window.localStorage.getItem("darkMode") === "true"; // if theme = dark => set dark
    isLocalDarkMode && SetIsDarkMode(isLocalDarkMode);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("darkMode", isDarkMode + "");
  }, [isDarkMode]);

  return {
    isDarkMode,
    ToggleDarkMode,
  };
}
