import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@contexts/theme';

const Favorites = props => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: theme.textColor,
        }}
      >Funcionando</Text>
    </View>
  );
}

export default Favorites;