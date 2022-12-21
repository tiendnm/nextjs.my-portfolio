import { TmpCookiesObj } from "cookies-next/lib/types";

export const validateEmail = (mail: string) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);

export const validateCardNumber = (cardNumber: string) =>
  cardNumber.length === 12 || cardNumber.length === 9;

export const isISODate = (str: string) => {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
  const d = new Date(str);
  return (
    d instanceof Date &&
    !isNaN(d as unknown as number) &&
    d.toISOString() === str
  ); // valid date
};

export const compareArrays = (a: any[], b: any[]) =>
  a.length === b.length && a.every((element, index) => element === b[index]);

export const removeAccents = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");

export const isValidCookies = (cookies: TmpCookiesObj) => {
  if (!cookies.access_token || !cookies.expires_time || !cookies.user_id) {
    return false;
  }
  return true;
};
