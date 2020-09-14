import React from 'react';

import Switch from "@components/Switches";
import { StyleSheet, View } from "react-native";

import IonicIcons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@contexts/theme';

const ThemeSwicher = () => {
  const { changeTheme, theme } = useTheme();

  return (
    <View style={styles.darkThemeSwitchContainer}>
      <IonicIcons style={{ marginRight: 5 }} size={20} 

        {...theme.mode === 'dark' ?
          { name: 'moon-outline',  color: '#F6F6F6' }:
          { name: 'sunny-outline', color: '#000000' }
        }
      />
      <Switch change={changeTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  darkThemeSwitchContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },
})


export default ThemeSwicher;