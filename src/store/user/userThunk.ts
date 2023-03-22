import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormSignInType, FormSignUpType } from '../../types/userTypes';
import {
  changeAvatarFromAsyncStorage,
  checkAuthorizedToAsyncStorage,
  logoutFromAsyncStorage,
  signInToAsyncStorage,
  signUpToAsyncStorage,
} from '../../utils/signHelper';

const loginByLoginPass = createAsyncThunk(
  'user/login',
  async (values: FormSignInType, { rejectWithValue }) => {
    try {
      const res = await signInToAsyncStorage(values);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const loginByLogin = createAsyncThunk(
  'user/auth',
  async (login, { rejectWithValue }) => {
    try {
      const res = await checkAuthorizedToAsyncStorage();
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const logOut = createAsyncThunk(
  'user/logout',
  async (login, { rejectWithValue }) => {
    try {
      await logoutFromAsyncStorage();
      return true;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const signUp = createAsyncThunk(
  'user/sing-up',
  async (values: FormSignUpType, { rejectWithValue }) => {
    try {
      const res = await signUpToAsyncStorage(values);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const changeAvatar = createAsyncThunk(
  'user/change-avatar',
  async (uri: string, { rejectWithValue }) => {
    try {
      const res = await changeAvatarFromAsyncStorage(uri);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export default {
  loginByLoginPass,
  loginByLogin,
  signUp,
  logOut,
  changeAvatar,
};
