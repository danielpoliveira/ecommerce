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
import Login from '@pages/login';



const App: React.FC = () => {
  return (
    <>
      <StatusBar
      backgroundColor="#1E1F28"
     
    />
    <View style={{
      flex: 1, 
      backgroundColor: '#1E1F28',
    }}>
  
      <Login/>
    </View>
    </>
  );
}

export default App;