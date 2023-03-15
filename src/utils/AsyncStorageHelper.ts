import { AsyncStorage } from 'react-native';

export class AsyncStorageItem<D> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  get = async (): Promise<Awaited<D>> => {
    const storedValue = (await AsyncStorage.getItem(this.key)) || '';
    const parsedValue = JSON.parse(storedValue as string);

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
