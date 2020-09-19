import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@contexts/auth';
import { useTheme } from '@contexts/theme';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


const Routes = () => {
  const { signed } = useAuth();
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={navigationStyles(theme)}>
      { !signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

const navigationStyles = theme => ({
  colors: {
    background: theme.background,
  }
});

export default Routes;