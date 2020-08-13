import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';


import Favorite from '@components/Buttons/Toogle/Favorite';
import Label from '@components/TextFields/Label';
import Dropdown from '@components/Dropdown';
import Checkbox from '@components/Checkbox';
import Switch from '@components/Switches';
import TagOrdinary from '@components/Tags/Ordinary';
import TagSmall from '@components/Tags/Small';
import Hotlabel from '@components/Hotlabel';
import Login from '@pages/Login';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#2A2C36' }} >
      
      <StatusBar
        translucent

        backgroundColor="rgba(0, 0, 0, 0)"
        animated
      />
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: '#2A2C36'
          }
        }}
      >
        <Routes />
      </NavigationContainer>
    </View>
  );
}

export default App;