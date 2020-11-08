import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useContext } from 'react';
// import * as auth from '../services/auth';
import { Redirect } from 'react-router-dom';

const AuthContextData = {
  loading: Boolean,
  signed: Boolean,
  user: Object || null,
  signIn: () => { },
  signOut: () => { }
}

const AuthContext = createContext(AuthContextData);

///JWT (Stateless)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    function loadStoragedData() {
      const storagedUser = localStorage.getItem('@RNAuth:user');
      const storagedToken = localStorage.getItem('@RNAuth:token');
      
      if(storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
        
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    };

    loadStoragedData();
    
  }, []);
  
  
  async function signIn(data) {
    // const response = await auth.signIn();
    await api.post('/api/login', data)
      .then((response) => {
        localStorage.setItem('@RNAuth:user', JSON.stringify(response.data.user));
        localStorage.setItem('@RNAuth:token', response.data.jwt);
        api.defaults.headers['Authorization'] = `Bearer ${response.data.jwt}`;
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error.response.data);
      }
      );

    // setUser(response.user);

  }

  function signOut() {
    localStorage.clear();
    api.defaults.headers.Authorization = undefined;
    setUser(null);
    return (<Redirect push to="/"/>)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}