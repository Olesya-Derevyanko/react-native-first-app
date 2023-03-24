import {
  characterAPI,
  episodeAPI,
  locationAPI,
} from '../api/services/rickAndMortyApi';
import {
  setActualCharacter,
  setMoreCharacters,
} from '../store/character/characterSlice';
import { setEpisodeInfo, setEpisodes } from '../store/episode/episodeSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setLocations } from '../store/location/locationSlice';

export const useCurrentApi = () => {
  const dispatch = useAppDispatch();
  const currentCharacters = useAppSelector(
    state => state.characterSlice.characters,
  );
  const currentEpisodes = useAppSelector(state => state.episodeSlice.episodes);
  const currentCharacter = useAppSelector(
    state => state.characterSlice.currentCharacter,
  );
  const currentInfoCharacter = useAppSelector(
    state => state.characterSlice.info,
  );
  const currentInfoEpisode = useAppSelector(state => state.episodeSlice.info);
  const currentInfoLocation = useAppSelector(state => state.locationSlice.info);

  const getCharacters = async () => {
    let currentPage = 1;
    if (currentInfoCharacter.next) {
      currentPage = +currentInfoCharacter.next.split('page=')[1];
    }
    const res = await characterAPI.getCharacters(currentPage || 1);
    const info = res.data.info;
    const characters = res.data.results;
    let char = [];
    char = characters.map(async item => {
      const resEpisodes = await episodeAPI.getEpisodeById(
        +item.episode[0].split('episode/')[1],
      );
      item.firstEpisode = resEpisodes.data.name;
      return item;
    });
    const charactersRes = await Promise.all(char);
    const newCharactersArray = [...currentCharacters, ...charactersRes];
    dispatch(setMoreCharacters({ characters: newCharactersArray, info }));
  };

  const getCurrentCharacter = async (id: number) => {
    const res = await characterAPI.getCharacterById(id);
    const episodes = res.data.episode.map(async item => {
      const data = await episodeAPI.getEpisodeById(+item.split('episode/')[1]);
      return data.data;
    });
    const episodeRes = await Promise.all(episodes);
    dispatch(setActualCharacter(res.data));
    dispatch(setEpisodes(episodeRes));
  };

  const getEpisodes = async () => {
    const res = await episodeAPI.getEpisodes(1);
    const info = res.data.info;
    dispatch(setEpisodeInfo(info));
  };

  const getLocations = async () => {
    const res = await locationAPI.getLocations(1);
    const info = res.data.info;
    dispatch(setLocations(info));
  };

  return {
    getCharacters,
    getCurrentCharacter,
    getEpisodes,
    getLocations,
    currentCharacters,
    currentInfoCharacter,
    currentEpisodes,
    currentInfoEpisode,
    currentInfoLocation,
    currentCharacter,
  };
};
