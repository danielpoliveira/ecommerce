import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from '@contexts/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Dropdown = props => {
  const { placeholder } = props;
  const { theme } = useTheme();

  return (
    <View style={[styles.container, {borderColor: theme.textColorSecundary}]} >
      <Text style={[styles.text, { color: theme.textColor}]}>{placeholder || 'Tag'}</Text>
      <MaterialIcons name="keyboard-arrow-down" color="#ABB4BD" size={16}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '40%',
    height: 40,
    
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  }
});

export default Dropdown;