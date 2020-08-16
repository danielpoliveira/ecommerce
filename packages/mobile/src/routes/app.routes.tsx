import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@pages/Home';
import Shop from '@pages/Shop';
import Bag from '@pages/Bag';

import HomeIcon from '@components/BottomTab/Icons/HomeIcon';
import ShopIcon from '@components/BottomTab/Icons/ShopIcon';
import BagIcon from '@components/BottomTab/Icons/BagIcon';

const AppStack = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator
      tabBarOptions={{
        activeTintColor: '#EF3651',
        inactiveTintColor: '#fff',
        labelStyle: {
          fontSize: 10,
          lineHeight: 10,
          fontFamily: 'Poppins-SemiBold',
        },

        style: {
          backgroundColor: '#1E1F28',
          borderTopWidth: 0,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },

      }} >

      <AppStack.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <AppStack.Screen name="Shop" component={Shop}
        options={{
          tabBarIcon: ({ color }) => <ShopIcon color={color} />,
        }}
      />

      <AppStack.Screen name="Bag" component={Bag}
        options={{
          tabBarIcon: ({ color }) => <BagIcon color={color} />,
        }}
      />

    </AppStack.Navigator>
);

export default AppRoutes;
