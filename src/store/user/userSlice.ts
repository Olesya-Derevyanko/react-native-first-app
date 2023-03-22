import { createSlice } from '@reduxjs/toolkit';
import type { UserSliceType } from '../../types/userTypes';
import userThunk from './userThunk';

const initialState: UserSliceType = {
  user: {
    login: '',
    password: '',
  },
  theme: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setActualTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      userThunk.loginByLoginPass.fulfilled,
      (state, { payload }) => {
        if (!payload) {
          return;
        }
        state.user = payload;
      },
    );
    builder.addCase(userThunk.loginByLogin.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.user = payload;
    });
    builder.addCase(userThunk.signUp.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.user = payload;
    });

    builder.addCase(userThunk.changeAvatar.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.user = payload;
    });

    builder.addCase(userThunk.logOut.fulfilled, () => {
      return initialState;
    });
  },
});

export const { setActualTheme } = userSlice.actions;
export default userSlice.reducer;
