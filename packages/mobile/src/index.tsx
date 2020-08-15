import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Routes from './routes';
import ProductCardCatalog from '@components/ProductCard/Catalog';
import ProductCardMain from '@components/ProductCard/Main';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        animated
      />

      <NavigationContainer theme={navigationTheme}>
        <Routes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2C36'
  } 
})

const navigationTheme = {
  ...DefaultTheme,
  dark: true,

  colors: {
    ...DefaultTheme.colors,
    background: '#2A2C36',
  },

};


export default App;