import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '@svg/heart/Heart.svg';

const HeartIcon: React.FC = (props) => {
  const { color, bgColor } = props;

  return (
    <View style={styles.container} >
      <Icon fill={bgColor} stroke={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default HeartIcon;
