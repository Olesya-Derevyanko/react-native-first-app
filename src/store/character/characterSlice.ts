import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterType, InfoType } from '../../types/ApiTypes';
import {
  CharacterSliceType,
  CharactersPayloadType,
} from '../../types/slicesTypes';

const initialState: CharacterSliceType = {
  characters: [],
  currentCharacter: {} as CharacterType,
  info: {} as InfoType,
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {
    setMoreCharacters: (
      state,
      { payload }: PayloadAction<CharactersPayloadType>,
    ) => {
      state.characters = payload.characters;
      state.info = payload.info;
    },
    setActualCharacter: (state, { payload }: PayloadAction<CharacterType>) => {
      state.currentCharacter = payload;
    },
  },
});

export const { setMoreCharacters, setActualCharacter } = characterSlice.actions;
export default characterSlice.reducer;
