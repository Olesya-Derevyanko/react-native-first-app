/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import Core from './src/Core/Core';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Core />
    </Provider>
  );
};

export default App;
