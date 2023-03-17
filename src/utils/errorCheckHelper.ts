export const checkIsLoginErrorMessage = (err: string) => {
  return /login/i.test(err);
};

export const checkIsPasswordErrorMessage = (err: string) => {
  return /password/i.test(err);
};
