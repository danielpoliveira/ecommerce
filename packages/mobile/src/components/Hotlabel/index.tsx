import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Hotlabel: React.FC = props => {
  const { placeholder, active } = props;

  return (
    <View 
      style={[ 
        styles.container,
        active 
        ? 
          { backgroundColor: '#FF3E3E' }
        :
          undefined,
        
      ]} 
    >
      <Text style={styles.text}>{placeholder}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 40,

    minWidth: 40,
    height: 24,
    
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  text: {
    paddingHorizontal: 5, 
    fontFamily: 'Poppins-SemiBold',
    color: '#F6F6F6',
    textTransform: "uppercase",
    fontSize: 11,
  }
});

export default Hotlabel;