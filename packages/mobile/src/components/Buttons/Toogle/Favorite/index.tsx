import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@contexts/theme';

const FavoriteIcon: React.FC = props => {
  const { isEnabled } = props;
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: theme.background}]}>
      <IonicIcons   
        name={`heart-${isEnabled? 'sharp': 'outline'}`} 
        color={isEnabled? '#EF3651':theme.textColorSecundary} 
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
    
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 5,
    shadowColor: '#EF3651',
  },
});

export default FavoriteIcon;
