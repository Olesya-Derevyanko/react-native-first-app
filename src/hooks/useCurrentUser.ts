import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutUser, setActualUser } from '../store/user/userSlice';
import {
  FormResetPassType,
  FormSignInType,
  FormSignUpType,
  FormUserType,
  UserType,
} from '../types/userTypes';
import { AsyncStorageItem } from '../utils/AsyncStorageHelper';

export const usersStorage = new AsyncStorageItem<UserType[]>('users');
export const authorizedUserStorage = new AsyncStorageItem<string>(
  'authorized-user',
);

export const useCurrentUser = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.userSlice.user);

  const signUp = async (value: FormSignUpType) => {
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
    await usersStorage.set(users);
    await authorizedUserStorage.set(login);
    dispatch(setActualUser(newUser));
  };

  const signIn = async (value: FormSignInType) => {
    const { login, password } = value;
    const users: UserType[] = (await usersStorage.get()) || [];
    const userIndex = users.findIndex(item => item.login === login);
    if (userIndex === -1) {
      throw new Error('There is no user with this login');
    }
    if (users[userIndex].password !== password) {
      throw new Error('Invalid password');
    }
    await authorizedUserStorage.set(login);
    dispatch(setActualUser(users[userIndex]));
  };

  const logout = async () => {
    await authorizedUserStorage.remove();
    dispatch(logoutUser());
  };

  const checkAuthorized = async () => {
    const authorizedUser: string = await authorizedUserStorage.get();
    if (authorizedUser === null) {
      return;
    }
    const users: UserType[] = (await usersStorage.get()) || [];
    const authUser = users.find(item => item.login === authorizedUser);
    if (!authUser?.login.length) {
      throw new Error('User not found');
    }
    dispatch(setActualUser(authUser));
  };

  const changeAvatar = async (uri: string) => {
    const authorizedUser: string = await authorizedUserStorage.get();
    const users: UserType[] = (await usersStorage.get()) || [];
    const userIndex = users.findIndex(item => item.login === authorizedUser);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    users[userIndex].avatar = uri;
    await usersStorage.set(users);
    dispatch(setActualUser(users[userIndex]));
  };

  const deleteUser = async () => {
    await authorizedUserStorage.remove();
    const users: UserType[] = (await usersStorage.get()) || [];
    const newUsers = users.filter(item => item.login !== currentUser.login);
    await usersStorage.set(newUsers);
    dispatch(logoutUser());
  };

  const resetPassword = async (value: FormResetPassType) => {
    const users: UserType[] = (await usersStorage.get()) || [];
    const userIndex = users.findIndex(item => item.login === currentUser.login);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    if (users[userIndex].password !== value.oldPassword) {
      throw new Error('Incorrect old password');
    }
    users[userIndex].password = value.password;

    await usersStorage.set(users);
    dispatch(setActualUser(users[userIndex]));
  };

  const changeInfo = async (value: FormUserType) => {
    const users: UserType[] = (await usersStorage.get()) || [];
    const userIndex = users.findIndex(item => item.login === currentUser.login);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    if (value.name) {
      users[userIndex].name = value.name;
    }
    if (value.email) {
      users[userIndex].email = value.email;
    }
    if (
      value.dob !== new Date() &&
      value.dob !== new Date(0) &&
      value.dob !== currentUser.dob
    ) {
      users[userIndex].dob = value.dob;
    }
    await usersStorage.set(users);
    dispatch(setActualUser(users[userIndex]));
  };

  return {
    signIn,
    signUp,
    logout,
    deleteUser,
    checkAuthorized,
    changeAvatar,
    currentUser,
    resetPassword,
    changeInfo,
  };
};
