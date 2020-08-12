import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Review: React.FC = props => {
  const { placeholder } = props;

  return (
    <View style={styles.container} >
      <MaterialIcons name="create" color="#FFF" size={22} />
      <Text style={styles.text}>Write a review</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 128,
    height: 36,
    backgroundColor: '#EF3651',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF3651',
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 4,
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
    paddingLeft: 10,
    
    fontSize: 11,
  }
});

export default Review;