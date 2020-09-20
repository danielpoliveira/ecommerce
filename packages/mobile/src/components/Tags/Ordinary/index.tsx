import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from '@contexts/theme';

interface TagOrdinaryProps {
  placeholder?: string;
  active?: boolean;
};

const TagOrdinary = (props: TagOrdinaryProps) => {
  const { placeholder, active } = props;
  const { theme } = useTheme();

  return (
    <View
      style={
        [active
          ?
          { backgroundColor: theme.primary }
          :
          { borderWidth: 1, borderColor: theme.textColorSecundary },
        styles.container]
      } 
    >
      <Text
        style={{
          textTransform: 'uppercase',
          color: active ? theme.background : theme.textColor
        }}
      >{placeholder || 'tag'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 100,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 20,
  }
});

export default TagOrdinary;