import React from 'react';
import { View, StyleSheet } from 'react-native';

import Logo from '@logo/Google.svg';

const Google: React.FC = () => {
  return (
    <View style={styles.container}>
        <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: 92,
      height: 64,
      backgroundColor: '#FFFFFF',
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#EF3651',
      shadowOpacity: 0.35,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 8,
      elevation: 5,
    },
  });

  export default Google;
  