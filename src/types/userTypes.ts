export type UserType = {
  name?: string;
  login: string;
  email?: string;
  dob?: Date;
  theme?: string;
  password: string;
};

export type ResponseType = {
  type: string;
  message: string;
};

export type FormSignUpType = {
  login: string;
  password: string;
  repeatPassword: string;
};

export type FormSignInType = {
  login: string;
  password: string;
};
