import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import image from '@images/category-card.png';

import { useTheme } from '@contexts/theme';

const CategoryCard: React.FC = props => {

  const { name } = props;
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.categoryTextView, { backgroundColor: theme.background }]} >
        <Text style={[styles.categoryText, { color: theme.textColor }]}>{name}</Text>
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
    //shadowColor: '#000000',
    shadowOpacity: 0.08,
    elevation: 5,
  },

  categoryTextView: {
    height: '100%',
    width: '50%',
    paddingHorizontal: 23,
    justifyContent: "center"
  },

  categoryText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    textTransform: 'capitalize',
  },

  caregoryImage: {
    height: '100%',
    width: '50%',
  }
})

export default CategoryCard;