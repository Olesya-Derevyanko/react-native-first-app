import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import characterSlice from './character/characterSlice';
import episodeSlice from './episode/episodeSlice';
import locationSlice from './location/locationSlice';

const store = configureStore({
  reducer: {
    userSlice,
    characterSlice,
    episodeSlice,
    locationSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export default store;
