import React, { createContext, useState } from 'react';

interface UserData {
  name?: string,
  username?: string,
  city?: string,
  email?: string,
  avatar?: string,
  description?: string,
  password?: string,
  games?: string[],
}

interface UserContextData {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const UserContext = createContext<UserContextData>({} as UserContextData);

interface UserProviderProps {
  children: React.ReactNode
}

function UserProvider({ children }: UserProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<UserData>({
    name: '',
    username: '',
    city: '',
    email: '',
    password: '',
    games: [''],
  })

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };