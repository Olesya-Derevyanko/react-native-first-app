import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageItem<D> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  get = async (): Promise<Awaited<D>> => {
    const storedValue: string | null = await AsyncStorage.getItem(this.key);
    const parsedValue =
      typeof storedValue === 'string' ? JSON.parse(storedValue) : null;
    return parsedValue;
  };

  set = async (value: D) => {
    const stringifyedValue = JSON.stringify(value);

    await AsyncStorage.setItem(this.key, stringifyedValue);
  };

  remove = () => {
    AsyncStorage.removeItem(this.key);
  };
}
