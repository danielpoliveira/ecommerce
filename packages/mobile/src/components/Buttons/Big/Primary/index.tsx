import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { useTheme } from '@contexts/theme';

interface PrimaryProps {
  placeholder?: string;
  handlerSubmitCart?: () => void;
};

const Primary = (props: PrimaryProps) => {
  const { placeholder, handlerSubmitCart } = props;
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={handlerSubmitCart}
      android_ripple={{ color: theme.textColor, borderless: false, radius: 0 }}
      style={[styles.container, { backgroundColor: theme.primary, shadowColor: theme.primary }]} >
      <Text style={styles.text}>{placeholder}</Text>
    </Pressable>
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



export default Primary;