import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '@services/api';
import * as auth from '@services/auth';

interface User {
  name: string;
  email: string;
};

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      const storagedUser = await AsyncStorage.getItem('@Ecommerce:user');
      const storagedToken = await AsyncStorage.getItem('@Ecommerce:token');

      if (storagedToken && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = () => {
    auth.signIn().then(async res => {
      setUser(res.user);

      api.defaults.headers.Authorization = `Bearer ${res.token}`;

      await AsyncStorage.setItem('@Ecommerce:user', JSON.stringify(res.user));
      await AsyncStorage.setItem('@Ecommerce:token', res.token);
    });
  }

  const signOut = async () => {
    await AsyncStorage.removeItem('@RNAuth:user');
    await AsyncStorage.removeItem('@RNAuth:token');

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}
