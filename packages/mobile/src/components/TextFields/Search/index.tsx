import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';

const Search: React.FC = props => {
  const { placeholder } = props;

  return (
    <View style={styles.container} >
      <IonicIcons style={styles.searchIcon} name="search-outline" size={18} color="#8E8E93" />
      <Text style={styles.placeholder}>Search for {placeholder}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 343,
    height: 40,
    backgroundColor: '#2A2C36',
    borderRadius: 23,
    alignItems: 'center',
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

  placeholder: {
    fontFamily: 'Poppins-Regular',
    color: '#ABB4BD',
    paddingLeft: 7.5,
    fontSize: 16, 
  }
});

export default Search;