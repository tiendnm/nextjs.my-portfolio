export type StatusState = "loading" | "unauthorized" | "authorized";

export interface ICredentials {
  username: string;
  password: string;
  remember?: boolean;
}

export interface IUser {
  id?: string;
  username?: string;
  email?: string;
  phone_number?: string;
}

export interface IAuth {
  access_token?: string;
  expires_time?: string;
  refresh_token?: string;
  user_email?: string;
  user_id?: string;
  user_name?: string;
  user_phone_number?: string;
}

export interface IAccessTokenResponse {
  access_token?: string;
  expires_time?: string;
  refresh_token?: string;
  user?: IUser;
}

export interface ISessionOption {
  required?: boolean;
  onUnauthorize?: () => void;
}
export interface ISession {
  data?: IAuth;
  status: StatusState;
}
