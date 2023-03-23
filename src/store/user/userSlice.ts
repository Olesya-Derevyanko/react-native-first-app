import { createSlice } from '@reduxjs/toolkit';
import type { UserSliceType } from '../../types/userTypes';

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
    setActualUser: (state, { payload }) => {
      state.user = payload;
    },
    logoutUser: state => {
      state.user = initialState.user;
    },
  },
});

export const { setActualTheme, setActualUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
