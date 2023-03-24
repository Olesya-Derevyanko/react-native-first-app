import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EpisodeType, InfoType } from '../../types/ApiTypes';
import { EpisodeSliceType } from '../../types/slicesTypes';

const initialState: EpisodeSliceType = {
  info: {} as InfoType,
  episodes: [],
};

export const episodeSlice = createSlice({
  name: 'episodeSlice',
  initialState,
  reducers: {
    setEpisodeInfo: (state, { payload }: PayloadAction<InfoType>) => {
      state.info = payload;
    },
    setEpisodes: (state, { payload }: PayloadAction<EpisodeType[]>) => {
      state.episodes = payload;
    },
  },
});

export const { setEpisodeInfo, setEpisodes } = episodeSlice.actions;
export default episodeSlice.reducer;
