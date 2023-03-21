import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setActualTheme } from '../store/user/userSlice';
import { useTheme } from '../theme/theme.context';
import { AsyncStorageItem } from './AsyncStorageHelper';

export const currentThemeStorage = new AsyncStorageItem<string>('theme');

export const useCurrentTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.userSlice.theme);
  const { toggleTheme } = useTheme();

  const setCurrentTheme = async () => {
    try {
      const currentTheme = await currentThemeStorage.get();
      dispatch(setActualTheme(currentTheme));
    } catch (error) {
      console.log(error);
    }
  };

  const changeTheme = async () => {
    try {
      if (theme === 'dark') {
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
  };
};
