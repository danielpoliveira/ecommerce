import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TagOrdinary: React.FC = props => {
  const { placeholder, active } = props;

  return (
    <View style={
      [ active 
      ? 
        { backgroundColor: '#EF3651' }
      :
        { borderWidth: 1, borderColor: '#ABB4BD' }
      , styles.container]
    } >
      <Text style={
        [ active 
        ? 
          { color: '#2A2C36' } 
        : { color: '#F6F6F6' }]}>Tag</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 100,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 20,
  }
});

export default TagOrdinary;