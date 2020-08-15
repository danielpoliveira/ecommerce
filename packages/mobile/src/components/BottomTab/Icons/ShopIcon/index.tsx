import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '@svg/shop/Shop.svg'

const ShopIcon: React.FC = props => {
  
  const { color } = props;

  return (
    <View style={styles.container} >
      <Icon fill={color}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30, height: 30,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default ShopIcon;