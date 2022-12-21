export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";

export const api_base_url = isProduction
  ? process.env.NEXT_PUBLIC_API_BASE_URL_PROD
  : process.env.NEXT_PUBLIC_API_BASE_URL_DEV;
