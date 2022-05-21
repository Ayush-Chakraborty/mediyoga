/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Main from './App/Main';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './App/Screens/Auth/Auth';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </AuthProvider>
  );
}
