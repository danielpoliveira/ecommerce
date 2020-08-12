import React from 'react';
import { View, Text } from 'react-native';

import Label from '@components/TextFields/Label';

const App: React.FC = () => {
  return (
    <View style={{
      flex: 1, justifyContent: "center",
      backgroundColor: '#1E1F28',
      alignItems: "center"
    }}>


      <Label />
    </View>
  );
}

export default App;