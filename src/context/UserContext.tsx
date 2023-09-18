import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type UserContextType = {
  isDarkThemeActivated: boolean;
  setIsDarkThemeActivated: Dispatch<SetStateAction<UserContextType['isDarkThemeActivated']>>;
  selectedHomeScreen: 'Início' | 'Popular' | 'Assista' | 'Mais Recentes';
  setSelectedHomeScreen: Dispatch<SetStateAction<UserContextType['selectedHomeScreen']>>;
}

const initialValue: UserContextType = {
  isDarkThemeActivated: true,
  setIsDarkThemeActivated: () => {},
  selectedHomeScreen: 'Início',
  setSelectedHomeScreen: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isDarkThemeActivated, setIsDarkThemeActivated] = useState<UserContextType['isDarkThemeActivated']>(initialValue.isDarkThemeActivated);
  const [selectedHomeScreen, setSelectedHomeScreen] = useState<UserContextType['selectedHomeScreen']>('Início');

  return (
    <UserContext.Provider value={{ isDarkThemeActivated, setIsDarkThemeActivated, selectedHomeScreen, setSelectedHomeScreen }}>
      {children}
    </UserContext.Provider>
  );
}