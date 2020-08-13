import React from 'react';
import { View, Text } from 'react-native';


import Favorite from '@components/Buttons/Toogle/Favorite';

const App: React.FC = () => {
  return (
    <View style={{
      flex: 1, justifyContent: "center",
      backgroundColor: '#1E1F28',
      alignItems: "center"
    }}>

      <Favorite isEnabled={true}/>
    </View>
  );
}

export default App;