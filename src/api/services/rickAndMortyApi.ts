import type { AxiosResponse } from 'axios';
import {
  CharactersResponseType,
  CharacterType,
  EpisodesResponseType,
  EpisodeType,
} from '../../types/ApiTypes';
import instance from '../index';

export enum CharacterApiPathENUM {
  GET = '/character',
  GET_BY_ID = '/character/',
}

export enum EpisodeApiPathENUM {
  GET = '/episode',
  GET_BY_ID = '/episode/',
}

export enum LocationApiPathENUM {
  GET = '/location',
}

export const characterAPI = {
  getCharacters: async (
    currentPage: number,
  ): Promise<AxiosResponse<CharactersResponseType>> => {
    return instance.get(CharacterApiPathENUM.GET, {
      params: {
        page: currentPage,
      },
    });
  },
  getCharacterById: async (
    id: number,
  ): Promise<AxiosResponse<CharacterType>> => {
    return instance.get(`${CharacterApiPathENUM.GET_BY_ID}${id}`);
  },
};

export const episodeAPI = {
  getEpisodes: async (
    currentPage: number,
  ): Promise<AxiosResponse<EpisodesResponseType>> => {
    return instance.get(EpisodeApiPathENUM.GET, {
      params: {
        page: currentPage,
      },
    });
  },
  getEpisodeById: async (id: number): Promise<AxiosResponse<EpisodeType>> => {
    return instance.get(`${EpisodeApiPathENUM.GET_BY_ID}${id}`);
  },
};

export const locationAPI = {
  getLocations: async (
    currentPage: number,
  ): Promise<AxiosResponse<EpisodesResponseType>> => {
    return instance.get(LocationApiPathENUM.GET, {
      params: {
        page: currentPage,
      },
    });
  },
};
