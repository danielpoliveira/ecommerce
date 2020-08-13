import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Label: React.FC = props => {
  const { placeholder } = props;

  return (
    <View style={styles.container} >
      <Text style={styles.text}>{placeholder}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 343,
    height: 64,
    backgroundColor: '#2A2C36',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 8,
    elevation: 5,
  },

  searchIcon: {
    paddingLeft: 10,
  },

  text: {
    fontFamily: 'Poppins-Regular',
    color: '#F5F5F5',
    paddingHorizontal: 20,
    lineHeight: 20,
    fontSize: 14,
  }
});

export default Label;