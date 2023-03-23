import type { ReactNode } from 'react';

export type ValueType = {
  label: ReactNode;
  key: number;
  icon?: string;
};

export type LocationType = {
  name: string;
  url: string;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationType;
  location: LocationType;
  image: string;
  episode: string[];
  url: string;
  created: string;
  firstEpisode?: string;
};

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type InfoType = {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
};

export type CharactersResponseType = {
  info: InfoType;
  results: CharacterType[];
};

export type EpisodesResponseType = {
  data: EpisodesResponseType;
  info: InfoType;
  results: EpisodeType[];
};
