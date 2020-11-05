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
    const response = await api.post('/api/login', {email: 'user3@teste.com', password: '!123Abcde'})
      .then((response) => {
        console.log("Entrou aqui no ok");
        return response;
      })
      .then((error) => {
        console.log("erro");
        return console.log(error.response.data);
      }
      );
      
    setUser(response.user);

    console.log(response)

    localStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    localStorage.setItem('@RNAuth:token', response.token);
    // setUser(response.user);

  }

  function signOut() {
    localStorage.clear();
    // api.defaults.headers.Authorization = undefined;
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