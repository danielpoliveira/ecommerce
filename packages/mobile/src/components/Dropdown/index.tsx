import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Dropdown: React.FC = props => {
  //const { placeholder } = props;

  return (
    <View style={styles.container} >
      <Text style={styles.text}>Tag</Text>
      <MaterialIcons name="keyboard-arrow-down" color="#ABB4BD" size={16}/>
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
    justifyContent: 'space-between',
    
    borderWidth: 1,
    borderColor: '#ABB4BD',

    paddingHorizontal: 10,
    
  },

  text: {
    fontFamily: 'Poppins-Regular',
    color: '#F6F6F6',
    
    
    fontSize: 11,
  }
});

export default Dropdown;