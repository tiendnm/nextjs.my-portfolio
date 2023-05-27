"use client";
import Topbar from "@components/admin/Topbar";
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

interface IAdminContext {
  setGoBack: Dispatch<SetStateAction<boolean>>;
  setGoHome: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<string>>;
}
const initialAdminContext: IAdminContext = {
  setGoHome: () => false,
  setGoBack: () => false,
  setTitle: () => "",
};
const AdminContext = createContext<IAdminContext>(initialAdminContext);

export const AdminContextProvider = (props: PropsWithChildren) => {
  const [goHome, setGoHome] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const [title, setTitle] = useState("");

  const value = {
    setGoBack,
    setGoHome,
    setTitle,
  };
  return (
    <AdminContext.Provider value={value}>
      <div className="relative h-full w-full overflow-auto bg-slate-300">
        <Topbar
          home={goHome}
          back={goBack}>
          {title}
        </Topbar>
        <div className="mx-3 mt-12 flex flex-col items-center justify-between md:mx-auto md:max-w-lg">
          {props.children}
        </div>
      </div>
    </AdminContext.Provider>
  );
};

export function useAdminContext({
  canGoBack,
  canGoHome,
  pageTitle,
}: {
  canGoBack: boolean;
  canGoHome: boolean;
  pageTitle: string;
}) {
  const { setGoBack, setGoHome, setTitle } = useContext(AdminContext); // first load is light
  useEffect(() => {
    setGoBack(canGoBack);
  }, [canGoBack, setGoBack]);
  useEffect(() => {
    setGoHome(canGoHome);
  }, [canGoHome, setGoHome]);

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);
  return {};
}
