import React, {createContext, useState} from 'react';
import {signin, signout, signup, resetPassword} from '../../Api/Auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{user, setUser, signin, signout, signup, resetPassword}}>
      {children}
    </AuthContext.Provider>
  );
};
