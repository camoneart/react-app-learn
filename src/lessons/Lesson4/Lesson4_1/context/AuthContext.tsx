import React, { useState } from "react";
import { createContext, use } from "react";

type User = {
  id: string;
  username: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userInfo: User) => {
    if (
      userInfo.username === "testUser" &&
      userInfo.password === "testPassword"
    ) {
      setUser(userInfo);
    } else {
      alert("ユーザー名またはパスワードが間違っています");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = { user, login, logout };

  return <AuthContext value={contextValue}>{children}</AuthContext>;
};

export default AuthContext;

export { useAuth, AuthProvider };
