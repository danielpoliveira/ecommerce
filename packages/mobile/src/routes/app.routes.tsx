import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from '@routes/bottomNavigation.routes';
import Product from '@pages/Product';

import { useTheme } from '@contexts/theme';

const AppStack = createStackNavigator();

const AppRoutes = (props) => {
  const { theme } = useTheme();
  return (
    <AppStack.Navigator screenOptions={{
      headerTitleStyle: {
        fontFamily: 'Archivo-Regular'
      }
    }}>
      <AppStack.Screen
        name="Bottom Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="Product"
        component={Product}
        options={{
          headerTintColor: theme.textColor, 

          headerTitleAlign: 'center'
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;

