"use client";
import axios from "axios";
import { getCookies, setCookie, deleteCookie } from "cookies-next";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { isValidCookies } from "@utils/datatype";
import { api_base_url } from "@utils/url";
import {
  IAuth,
  IAccessTokenResponse,
  ICredentials,
  ISession,
  ISessionOption,
  StatusState,
} from "./types";

const Session = createContext<ISession>({
  status: "loading",
});

export function SessionProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<StatusState>("loading");
  const [sessionData, setSessionData] = useState<IAuth>();

  const value: ISession = {
    data: sessionData,
    status: status,
  };

  useEffect(() => {
    const cookies = getCookies();

    if (!isValidCookies(cookies)) {
      setStatus("unauthorized");
    } else {
      const session: IAuth = {
        access_token: decodeURIComponent(`${cookies.access_token}`),
        expires_time: decodeURIComponent(`${cookies.expires_time}`),
        refresh_token: decodeURIComponent(`${cookies.refresh_token}`),
        user_email: decodeURIComponent(`${cookies.user_email}`),
        user_id: decodeURIComponent(`${cookies.user_id}`),
        user_name: decodeURIComponent(`${cookies.user_name}`),
        user_phone_number: decodeURIComponent(`${cookies.user_phone_number}`),
      };
      setSessionData(session);
      setStatus("authorized");
    }
  }, []);
  return <Session.Provider value={value}>{children}</Session.Provider>;
}

export function useSession({ required = false, onUnauthorize }: ISessionOption = {}) {
  // ------------------------------------------------------------------
  const context = useContext(Session);
  if (!context) {
    throw new Error("useSession must be used within SessionProvider");
  }
  // ------------------------------------------------------------------
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callBackUrl") ?? "/";
  //#region signIn
  const signIn = useCallback(
    async ({ username, password, remember }: ICredentials) => {
      try {
        const response = await axios.post(`${api_base_url}/v1/auth/access-token`, {
          username,
          password,
        });
        const data = response.data as IAccessTokenResponse;
        setCookie("access_token", data.access_token, { path: "/" });
        setCookie("refresh_token", data.refresh_token, { path: "/" });
        setCookie("expires_time", data.expires_time, { path: "/" });
        setCookie("user_id", data.user?.id, { path: "/" });
        setCookie("user_name", data.user?.username, { path: "/" });
        setCookie("user_email", data.user?.email, { path: "/" });
        setCookie("user_phone_number", data.user?.phone_number, {
          path: "/",
        });
        router.push(callbackUrl);
      } catch (e) {
        console.error(e);
      }
    },
    [callbackUrl, router]
  );
  //#endregion
  //#region signOut
  const signOut = useCallback(() => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    deleteCookie("expires_time");
    deleteCookie("user_id");
    deleteCookie("user_name");
    deleteCookie("user_email");
    deleteCookie("user_phone_number");
    router.push("/");
  }, [router]);
  //#endregion
  useEffect(() => {
    //#region checkAuthorize
    const checkAuth = () => {
      const cookies = getCookies();
      if (required && !isValidCookies(cookies)) {
        if (onUnauthorize) {
          onUnauthorize();
        } else {
          router.push(`/signin?callBackUrl=${currentPathname}`);
        }
      }
    };
    //#endregion
    checkAuth();
    document.addEventListener("visibilitychange", checkAuth);
    return () => {
      document.removeEventListener("visibilitychange", checkAuth);
    };
  }, [context, currentPathname, onUnauthorize, required, router]);
  // ------------------------------------------------------------------
  return { ...context, signIn, signOut };
}
