import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const FavoriteIcon: React.FC = props => {
  const { isEnabled } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <IonicIcons   
        name={`heart-${isEnabled? 'sharp': 'outline'}`} 
        color={isEnabled? '#EF3651':'#FFFFFF'} 
        size={15}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 36,
    height: 36,
    backgroundColor: '#2A2C36',
    borderRadius: 36,
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
});

export default FavoriteIcon;
