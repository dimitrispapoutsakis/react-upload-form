import { createContext, useContext, ReactNode } from 'react';
import { TTheme } from '@typings';

interface IUseGlobal {
  
}

const GlobalContext = createContext<IUseGlobal | undefined>(undefined);

interface IGlobalProvider {
  children: ReactNode;
  theme: TTheme
}

export const GlobalProvider = (props: IGlobalProvider) => {
  const { children, theme } = props;
  const value: IUseGlobal = {
    theme,
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = (): IUseGlobal => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};
