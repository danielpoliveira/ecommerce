import 'react-native-gesture-handler';
import React from 'react';
import {
  View, StatusBar, StyleSheet,
} from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthProvider } from '@contexts/auth';
import Routes from './routes';

const App: React.FC = () => (
  <View style={styles.container}>
    <StatusBar
      translucent
      barStyle="light-content"
      backgroundColor="rgba(0, 0, 0, 0.2)"
      animated
    />

    <NavigationContainer theme={navigationTheme}>

      <AuthProvider>
        <Routes />
      </AuthProvider>

    </NavigationContainer>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2C36',
  },
});

const navigationTheme = {
  ...DefaultTheme,
  dark: true,

  colors: {
    ...DefaultTheme.colors,
    background: '#2A2C36',
  },

};

export default App;
