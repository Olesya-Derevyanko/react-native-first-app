import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InfoType } from '../../types/ApiTypes';
import { LocationSliceType } from '../../types/slicesTypes';

const initialState: LocationSliceType = {
  info: {} as InfoType,
};

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    setLocations: (state, { payload }: PayloadAction<InfoType>) => {
      state.info = payload;
    },
  },
});

export const { setLocations } = locationSlice.actions;
export default locationSlice.reducer;
