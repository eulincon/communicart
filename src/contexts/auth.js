import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useContext } from 'react';
import * as auth from '../services/auth';
import { Redirect } from 'react-router-dom';

const AuthContextData = {
  signed: Boolean,
  user: Object || null,
  signIn: () => (Promise),
  signOut: () => { }
}

const AuthContext = createContext(AuthContextData);

///JWT (Stateless)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem('@RNAuth:user');
      const storagedToken = localStorage.getItem('@RNAuth:token');
      
      if(storagedUser && storagedToken) {
        
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
        
        setUser(JSON.parse(storagedUser));
      }
    };

    loadStoragedData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    localStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    localStorage.setItem('@RNAuth:token', response.token);
  }

  function signOut() {
    localStorage.clear();
    // api.defaults.headers.Authorization = undefined;
    setUser(null);
    return (<Redirect push to="/"/>)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}