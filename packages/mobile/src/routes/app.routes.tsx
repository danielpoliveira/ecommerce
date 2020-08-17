import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@pages/Home';
import Shop from '@pages/Shop';
import Bag from '@pages/Bag';
import Profile from '@pages/Profile';

import HomeIcon from '@components/BottomTab/Icons/HomeIcon';
import ShopIcon from '@components/BottomTab/Icons/ShopIcon';
import BagIcon from '@components/BottomTab/Icons/BagIcon';
import ProfileIcon from '@components/BottomTab/Icons/ProfileIcon';

const AppStack = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator

    tabBarOptions={{
      activeTintColor: '#EF3651',
      inactiveTintColor: '#ABB4BD',

      iconStyle: {
        marginTop: 2,
      },

      labelStyle: {
        fontSize: 12,
        margin: 0,
        padding: 0,
        fontFamily: 'Poppins-SemiBold',
      },

      style: {
        height: 60,
        backgroundColor: '#1E1F28',
        borderTopWidth: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      },
    }} >

    <AppStack.Screen name="Home" component={Home}
      options={{
        tabBarIcon: ({ color, focused }) => <HomeIcon bgColor={focused ? color : 'none'} color={color} />,
      }}
    />

    <AppStack.Screen name="Shop" component={Shop}
      options={{
        tabBarIcon: ({ color, focused }) => <ShopIcon bgColor={focused ? color : 'none'} color={color} />,
      }}
    />

    <AppStack.Screen name="Bag" component={Bag}
      options={{
        tabBarIcon: ({ color, focused }) => <BagIcon bgColor={focused ? color : 'none'} color={color} />,
      }}
    />

    <AppStack.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: ({ color, focused }) => <ProfileIcon bgColor={focused ? color : 'none'} color={color} />,
      }}
    />

  </AppStack.Navigator>
);

export default AppRoutes;
