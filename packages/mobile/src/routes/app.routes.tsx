import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();


const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      {/**<AppStack.Screen /> */}
    </AppStack.Navigator>
  );
}

export default AppRoutes;