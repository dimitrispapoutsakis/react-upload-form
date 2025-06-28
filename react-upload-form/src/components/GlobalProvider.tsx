import { createContext, useContext } from 'react';
import { IChildren, IUploadProp, TTheme } from '@typings';

interface IUseGlobal {
  theme: TTheme;
  gradientBg: boolean;
  upload: IUploadProp;
}

const GlobalContext = createContext<IUseGlobal | undefined>(undefined);

type TGlobalProvider = IChildren & IUseGlobal;

export const GlobalProvider = (props: TGlobalProvider) => {
  const { children, theme, gradientBg, upload } = props;
  const value: IUseGlobal = {
    theme,
    gradientBg,
    upload,
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
