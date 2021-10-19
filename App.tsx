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
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { MainScreen } from './src/screens/MainScreen';
import { Provider } from 'react-redux'
import { Store } from './src/store/store';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider, useTheme } from './src/Context/ThemeContext';

const App = () => {
  const { colors, isDark } = useTheme()
  return (
    <Provider store={Store}>
      <AppearanceProvider>
          <SafeAreaView style={{backgroundColor:colors.background}}>
          <ThemeProvider>
            <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
            <MainScreen />
            </ThemeProvider>
          </SafeAreaView>
      </AppearanceProvider>
    </Provider>
  );
};

export default App;
