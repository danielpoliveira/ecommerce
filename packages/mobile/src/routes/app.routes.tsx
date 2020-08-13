import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@pages/Home';

const AppStack = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator


      tabBarOptions={{
        style: {
          backgroundColor: '#1E1F28',
          borderTopWidth: 0,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          
        },

      }} >

      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;