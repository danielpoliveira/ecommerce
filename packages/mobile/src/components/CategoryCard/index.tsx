import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import image from '@images/category-card.png';

const CategoryCard: React.FC = props => {

  const { name } = props;

  return (
    <View style={styles.container}>
      <View style={styles.categoryTextView} >
        <Text style={styles.categoryText}>{name}</Text>
      </View>

      <Image source={image} style={styles.caregoryImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 343, height: 100,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: "hidden",
    
    marginBottom: 16,

    shadowOffset: {
      width: 0, height: 1,
    },
    shadowRadius: 25,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    elevation: 5,
  },

  categoryTextView: {
    backgroundColor: '#2A2C36',
    height: '100%',
    width: '50%',
    paddingHorizontal: 23,
    justifyContent: "center"
  },

  categoryText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#F6F6F6',
    textTransform: 'capitalize',
  },

  caregoryImage: {
    backgroundColor: 'blue',
    height: '100%',
    width: '50%',
  }
})

export default CategoryCard;