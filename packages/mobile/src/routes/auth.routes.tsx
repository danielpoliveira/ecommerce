import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import ForgotPassword from '@pages/ForgotPassword';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}} >
    <AuthStack.Screen name="Login" component={Login} />
    {/* <AuthStack.Screen name="SignUp" component={SignUp} />  */}

    {/* <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />  */}

    
  </AuthStack.Navigator>
);

export default AuthRoutes;