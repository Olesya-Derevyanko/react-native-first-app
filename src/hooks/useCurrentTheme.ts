import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setActualTheme } from '../store/user/userSlice';
import { useTheme } from '../theme/theme.context';
import { AsyncStorageItem } from '../utils/AsyncStorageHelper';

export const currentThemeStorage = new AsyncStorageItem<string>('theme');

export const useCurrentTheme = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(state => state.userSlice.theme);

  const { toggleTheme } = useTheme();

  const setCurrentTheme = async () => {
    try {
      const theme = await currentThemeStorage.get();
      dispatch(setActualTheme(theme));
    } catch (error) {
      console.log(error);
    }
  };

  const changeTheme = async () => {
    try {
      if (currentTheme === 'dark') {
        await currentThemeStorage.set('light');
        dispatch(setActualTheme('light'));
      } else {
        await currentThemeStorage.set('dark');
        dispatch(setActualTheme('dark'));
      }
      toggleTheme();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    changeTheme,
    setCurrentTheme,
    currentTheme,
  };
};
