import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCardCatalog: React.FC = props => {
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
    width: 184, height: 280,

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
    textTransform: 'uppercase',
    fontSize: 14,
  }
});



export default ProductCardCatalog;