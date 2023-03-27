export type UserType = {
  name?: string;
  login: string;
  email?: string;
  dob?: Date;
  password: string;
  avatar?: string;
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

export type FormResetPassType = {
  oldPassword: string;
  password: string;
  repeatPassword: string;
};

export type FormUserType = {
  name: string;
  email: string;
  dob: Date;
};

export type FormSignInType = {
  login: string;
  password: string;
};

export type UserSliceType = {
  user: UserType;
  theme: string;
};
