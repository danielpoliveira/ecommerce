import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Outline: React.FC = props => {
  const { placeholder } = props;

  return (
    <View style={styles.container} >
      <Text style={styles.text}>OUTLINE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 343,
    height: 48,
    
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#F6F6F6',
  },

  text: {
    fontFamily: 'Poppins-Regular',
    color: '#F6F6F6',
    
    fontSize: 14,
  }
});



export default Outline;