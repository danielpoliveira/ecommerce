import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@contexts/theme';

const FavoriteIcon = props => {
  const { isEnabled } = props;
  const { theme } = useTheme();

  const [pressed, setPressed] = useState(isEnabled);

  const handleFavorite = () => {
    setTimeout(() => setPressed(previousState => !previousState), 500);
  }

  return (
    <View style={styles.container}>
      <Pressable 
        android_ripple={{ color: theme.primary, borderless: false }} 
        style={[styles.button, { backgroundColor: theme.background }]}
        onPress={handleFavorite}
      >
        <IonicIcons
          name={`heart-${pressed ? 'sharp' : 'outline'}`}
          color={pressed ? '#EF3651' : theme.textColorSecundary}
          size={15}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 36,
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    
    shadowRadius: 8,
    elevation: 5,
    shadowColor: '#EF3651',
    width: 36,
    height: 36,
  },

  button: {
    flexDirection: 'row',
    width: 36,
    height: 36,

    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoriteIcon;
