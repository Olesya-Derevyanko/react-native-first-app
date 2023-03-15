import { ResponseType, UserType } from '../types/userTypes';
import { AsyncStorageItem } from './AsyncStorageHelper';

const usersStorage = new AsyncStorageItem<UserType[]>('users');

export const signUpToAsyncStorage = async (
  login: string,
  password: string,
): Promise<ResponseType> => {
  const users: UserType[] = (await usersStorage.get()) || [];
  if (users.findIndex(item => item.login === login) !== -1) {
    return { type: 'error', message: 'this login already exists' };
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
  return { type: 'success', message: 'ok' };
};
