import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type UserContextType = {
  isDarkThemeActivated: boolean;
  setIsDarkThemeActivated: Dispatch<SetStateAction<UserContextType['isDarkThemeActivated']>>;
}

const initialValue: UserContextType = {
  isDarkThemeActivated: false,
  setIsDarkThemeActivated: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isDarkThemeActivated, setIsDarkThemeActivated] = useState<boolean>(initialValue.isDarkThemeActivated);

  return (
    <UserContext.Provider value={{ isDarkThemeActivated, setIsDarkThemeActivated }}>
      {children}
    </UserContext.Provider>
  );
}