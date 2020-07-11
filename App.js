/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import store from './src/Redux'
import Navigation from './src/Navigation'

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
