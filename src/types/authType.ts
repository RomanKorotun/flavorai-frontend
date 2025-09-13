export interface IUserSignup {
  username: string;
  email: string;
  password: string;
}

export type IUserSignin = Omit<IUserSignup, "username">;

export interface IAuthResponse {
  message: string;
  user: {
    userName: string;
    email: string;
    avatar: string;
  };
}

export interface IResponseCurrent {
  userName: string;
  email: string;
  avatar: string;
}

export interface IAuthState {
  username: string | null;
  email: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  loading: boolean;
  error: boolean;
}
