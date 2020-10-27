<<<<<<< Updated upstream
import { createContext } from 'react';

const AuthContext = createContext({ signed: true });
=======
import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';

const AuthContextData = {
  signed: Boolean,
  user: Object,
  signIn: () => (Promise),
  signOut: () => { }
}

const AuthContext = createContext(AuthContextData);

///JWT (Stateless)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
>>>>>>> Stashed changes

export default AuthContext;