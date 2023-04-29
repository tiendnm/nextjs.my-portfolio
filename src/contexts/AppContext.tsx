import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAppContext {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
const initialAppContext: IAppContext = {
  darkMode: false,
  setDarkMode: () => {},
};
const AppContext = createContext<IAppContext>(initialAppContext);

export const AppContextProvider = (props: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState<boolean>(initialAppContext.darkMode); // first load is light

  useEffect(() => {
    const isLocalDarkMode = window.localStorage.getItem("darkMode") === "true"; // if theme = dark => set dark
    isLocalDarkMode && setDarkMode(isLocalDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("darkMode", darkMode + "");
  }, [darkMode]);
  const value = { darkMode, setDarkMode };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export function useDarkMode() {
  const { darkMode, setDarkMode } = useContext(AppContext); // first load is light
  const ToggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);

  return {
    darkMode,
    ToggleDarkMode,
  };
}
