import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {storage} from '../utils/storage';

type User = {
  id?: string;
  name?: string;
  email?: string;
  mobile?: string;
  designation?: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  signIn: (payload: {token: string; user: User}) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      const savedToken = await storage.getToken();
      const savedUser = await storage.getUser<User>();
      setToken(savedToken);
      setUser(savedUser);
      setLoading(false);
    };

    bootstrap();
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      signIn: async ({token, user}: {token: string; user: User}) => {
        setToken(token);
        setUser(user);
        await storage.setToken(token);
        await storage.setUser(user);
      },
      signOut: async () => {
        setToken(null);
        setUser(null);
        await storage.clearAll();
      },
    }),
    [user, token, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return ctx;
};