import { CharacterType, EpisodeType, InfoType } from './ApiTypes';

export type CharacterSliceType = {
  characters: CharacterType[];
  currentCharacter: CharacterType;
  info: InfoType;
};

export type CharactersPayloadType = {
  characters: CharacterType[];
  info: InfoType;
};

export type EpisodeSliceType = {
  info: InfoType;
  episodes: EpisodeType[];
};

export type LocationSliceType = {
  info: InfoType;
};
