import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  View, StatusBar, StyleSheet,
} from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthProvider } from '@contexts/auth';
import { ThemeProvider, useTheme } from '@contexts/theme';
import Routes from './routes';

const AppContainer = ({ children }) => {

  const { theme } = useTheme();

  return (
    <View style={[styles(theme).container]}>
      <StatusBar
        translucent
        barStyle={theme.barStyle}
        backgroundColor="rgba(0, 0, 0, 0.2)"
        animated
      />
      { children}
    </View>
  );
}

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider >
      <AuthProvider>

        <AppContainer>
          <NavigationContainer theme={navigationTheme}>
            <Routes />
          </NavigationContainer>
        </AppContainer>

      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = theme => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});

const navigationTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    background: 'none',
  },
};

export default App;
