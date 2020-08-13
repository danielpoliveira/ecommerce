import React from 'react';
import { View, Text } from 'react-native';

import Label from '@components/TextFields/Label';
import Dropdown from '@components/Dropdown';
import Checkbox from '@components/Checkbox';
import Switch from '@components/Switches';
import TagOrdinary from '@components/Tags/Ordinary';
import TagSmall from '@components/Tags/Small';
import Hotlabel from '@components/Hotlabel';



const App: React.FC = () => {
  return (
    <View style={{
      flex: 1, justifyContent: "center",
      backgroundColor: '#1E1F28',
      alignItems: "center"
    }}>
      
      <Hotlabel active />
    </View>
  );
}

export default App;