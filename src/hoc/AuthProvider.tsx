import React, { ReactNode, createContext, useState } from "react";

export interface IAuthContext {
  user: string | undefined;
  signIn: (newUser: string, callback: () => void) => void;
  signOut: (callback: () => void) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider: React.FC<IAuthProvider> = (props) => {
  const { children } = props;
  const [user, setUser] = useState<string | undefined>(undefined);

  const signIn = (newUser: string, callback: () => void) => {
    setUser(newUser);
    callback();
  };

  const signOut = (callback: () => void) => {
    setUser(undefined);
    callback();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
