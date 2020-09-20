import React, { createContext, useState, useEffect, useContext } from 'react';
import { StatusBarStyle } from 'react-native';

import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';

import * as themes from '@styles/index';

interface Theme {
  mode: string;
  background: string;
  textColor: string;
  textColorSecundary: string;
  barStyle: StatusBarStyle ;
  title: string;
  error: string;
  primary: string;
  success: string;
  lineColor: string;
  dark: string;
  bottomBarBackground: string;
};

interface ThemeContextData {
  theme: Theme;
  changeTheme(): void;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(themes.light);

  useEffect(() => {
    async function loadThemeData() {
      const storagedTheme = await AsyncStorage.getItem('@Ecommerce:theme');
      
      if(storagedTheme) {
        const themeParse: Theme = JSON.parse(storagedTheme);

        if(theme.mode !== themeParse.mode)
          setTheme(themeParse);
      }
    }

    loadThemeData();

  }, []);

  const changeTheme = async () => {
    const _theme = theme === themes.light? themes.dark : themes.light;

    setTheme(_theme);
    
    await AsyncStorage.setItem('@Ecommerce:theme', JSON.stringify(_theme));
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
}