import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Dropdown: React.FC = props => {
  const { placeholder, active } = props;

  return (
    <View 
      style={[ 
        active 
        ? 
          { backgroundColor: '#FF3E3E' }
        :
          undefined,
        styles.container
      ]} 
    >
      <Text style={styles.text}>Hot</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 40,
    height: 24,
    
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  text: {
    fontFamily: 'Poppins-SemiBold',
    color: '#F6F6F6',
    textTransform: "uppercase",
    fontSize: 11,
  }
});

export default Dropdown;