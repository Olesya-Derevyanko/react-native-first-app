import { ResponseType, UserType } from '../types/userTypes';
import { AsyncStorageItem } from './AsyncStorageHelper';

export const usersStorage = new AsyncStorageItem<UserType[]>('users');
export const authorizedUserStorage = new AsyncStorageItem<string>(
  'authorized-user',
);

export const signUpToAsyncStorage = async (
  login: string,
  password: string,
): Promise<ResponseType> => {
  const users: UserType[] = (await usersStorage.get()) || [];
  if (users.findIndex(item => item.login === login) !== -1) {
    return { type: 'error', message: 'This login already exists' };
  }
  const newUser: UserType = {
    name: '',
    login,
    email: '',
    dob: undefined,
    theme: 'light',
    password,
  };
  users.push(newUser);
  usersStorage.set(users);
  authorizedUserStorage.set(login);
  return { type: 'success', message: 'ok' };
};

export const signInToAsyncStorage = async (
  login: string,
  password: string,
): Promise<ResponseType> => {
  const users: UserType[] = (await usersStorage.get()) || [];
  const userIndex = users.findIndex(item => item.login === login);
  if (userIndex === -1) {
    return { type: 'error', message: 'There is no user with this login' };
  }
  if (users[userIndex].password !== password) {
    return { type: 'error', message: 'Invalid password' };
  }
  authorizedUserStorage.set(login);
  return { type: 'success', message: 'ok' };
};

export const checkAuthUser = async () => {
  return await authorizedUserStorage.get();
};

export const checkAuthorizedToAsyncStorage =
  async (): Promise<ResponseType> => {
    const authorizedUser: string = await authorizedUserStorage.get();
    if (authorizedUser !== null) {
      // add to redux store
      return { type: 'success', message: 'ok' };
    }
    return { type: 'error', message: 'Invalid password' };
  };
