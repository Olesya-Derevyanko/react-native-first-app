import { FormSignInType, FormSignUpType, UserType } from '../types/userTypes';
import { AsyncStorageItem } from './AsyncStorageHelper';

export const usersStorage = new AsyncStorageItem<UserType[]>('users');
export const authorizedUserStorage = new AsyncStorageItem<string>(
  'authorized-user',
);

export const signUpToAsyncStorage = async (value: FormSignUpType) => {
  const { login, password } = value;
  const users: UserType[] = (await usersStorage.get()) || [];
  if (users.findIndex(item => item.login === login) !== -1) {
    throw new Error('This login already exists');
  }
  const newUser: UserType = {
    login,
    dob: undefined,
    password,
  };
  users.push(newUser);
  usersStorage.set(users);
  authorizedUserStorage.set(login);
  return newUser;
};

export const signInToAsyncStorage = async (value: FormSignInType) => {
  const { login, password } = value;
  const users: UserType[] = (await usersStorage.get()) || [];
  const userIndex = users.findIndex(item => item.login === login);
  if (userIndex === -1) {
    throw new Error('There is no user with this login');
  }
  if (users[userIndex].password !== password) {
    throw new Error('Invalid password');
  }
  authorizedUserStorage.set(login);
  return users[userIndex];
};

export const checkAuthUser = async () => {
  return await authorizedUserStorage.get();
};

export const logoutFromAsyncStorage = async () => {
  await authorizedUserStorage.remove();
};

export const checkAuthorizedToAsyncStorage = async () => {
  const authorizedUser: string = await authorizedUserStorage.get();
  if (authorizedUser === null) {
    throw new Error('Invalid password');
  }
  const users: UserType[] = (await usersStorage.get()) || [];
  const authUser = users.find(item => item.login === authorizedUser);
  if (!authUser?.login.length) {
    throw new Error('User not found');
  }
  return authUser;
};

export const changeAvatarFromAsyncStorage = async (uri: string) => {
  const authorizedUser: string = await authorizedUserStorage.get();
  const users: UserType[] = (await usersStorage.get()) || [];
  const userIndex = users.findIndex(item => item.login === authorizedUser);
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  users[userIndex].avatar = uri;
  usersStorage.set(users);
  return users[userIndex];
};
