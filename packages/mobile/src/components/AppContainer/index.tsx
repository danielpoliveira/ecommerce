import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { useTheme } from '@contexts/theme';

const AppContainer = ({ children }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container]}>
      <StatusBar
        translucent
        barStyle={theme.barStyle}
        backgroundColor="rgba(0, 0, 0, 0.2)"
        animated
      />
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppContainer;