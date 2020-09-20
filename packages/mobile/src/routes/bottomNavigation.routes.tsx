import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@pages/Home';
import Shop from '@pages/Shop';
import Bag from '@pages/Bag';
import Favorites from '@pages/Favorites';

import Profile from '@pages/Profile';

import HomeIcon from '@components/BottomTab/Icons/HomeIcon';
import ShopIcon from '@components/BottomTab/Icons/ShopIcon';
import BagIcon from '@components/BottomTab/Icons/BagIcon';
import HeartIcon from '@components/BottomTab/Icons/HeartIcon';
import ProfileIcon from '@components/BottomTab/Icons/ProfileIcon';

import { useTheme } from '@contexts/theme';

const BottomStack = createBottomTabNavigator();

const Tabs = () => {
  const { theme } = useTheme();

  return (
    <BottomStack.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.primary,
        inactiveTintColor: theme.textColorSecundary,

        iconStyle: {
          //marginTop: 2,
        },

        labelStyle: {
          //fontSize: 12,
          //margin: 0,
          //padding: 0,
          fontFamily: 'Poppins-SemiBold',
        },

        style: {
          height: 60,
          backgroundColor: theme.bottomBarBackground,
          borderTopWidth: 0,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
      }} >

      <BottomStack.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => <HomeIcon bgColor={focused ? color : 'none'} color={color} />,
        }}
      />

      <BottomStack.Screen name="Shop" component={Shop}
        options={{
          tabBarIcon: ({ color, focused }) => <ShopIcon bgColor={focused ? color : 'none'} color={color} />,
        }}
      />

      <BottomStack.Screen name="Bag" component={Bag}
        options={{
          tabBarIcon: ({ color, focused }) => <BagIcon bgColor={focused ? color : 'none'} color={color} />,
        }}
      />
      
      <BottomStack.Screen name="Favorites" component={Favorites}
        options={{
          tabBarIcon: ({ color, focused }) => <HeartIcon bgColor={focused ? color : 'none'} color={color} />,
        }}
      />

      <BottomStack.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => <ProfileIcon bgColor={focused ? color : 'none'} color={color} />,
        }}
      />

    </BottomStack.Navigator>
  );
}

export default Tabs;