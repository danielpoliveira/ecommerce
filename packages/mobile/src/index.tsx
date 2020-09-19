import 'react-native-gesture-handler';
import React from 'react';

import { AuthProvider } from '@contexts/auth';
import { ThemeProvider } from '@contexts/theme';
import Routes from './routes';

import AppContainer from '@components/AppContainer';

const App = () => {

  return (
    <ThemeProvider >
      <AuthProvider>
        <AppContainer>
          <Routes />
        </AppContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}


export default App;
