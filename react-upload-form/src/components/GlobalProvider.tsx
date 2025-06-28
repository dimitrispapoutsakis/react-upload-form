import { createContext, useContext, ReactNode } from 'react';
import { TTheme } from '@typings';

interface IUseGlobal {
  theme: TTheme;
  gradientBg: boolean;
}

const GlobalContext = createContext<IUseGlobal | undefined>(undefined);

interface IGlobalProvider {
  children: ReactNode;
}

type TGlobalProvider = IGlobalProvider & IUseGlobal;

export const GlobalProvider = (props: TGlobalProvider) => {
  const { children, theme, gradientBg } = props;
  const value: IUseGlobal = {
    theme,
    gradientBg,
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
