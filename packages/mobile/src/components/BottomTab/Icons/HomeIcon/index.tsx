import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '@svg/home/Home.svg';

const HomeIcon: React.FC = (props) => {
  const { bgColor, color } = props;

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

export default HomeIcon;
