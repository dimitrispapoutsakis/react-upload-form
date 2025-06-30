import { createContext, useContext, useState } from 'react';
import { IChildren, IUploadProp, TTheme, TUploadStatus } from '@typings';

interface IUseGlobal {
  theme: TTheme;
  gradientBg: boolean;
  upload: IUploadProp;
  isUploading: boolean;
  setIsUploading: (isUploading: boolean) => void;
  uploadProgress: number;
  setUploadProgress: (uploadProgress: number) => void;
  uploadStatus: TUploadStatus;
  setUploadStatus: (uploadStatus: TUploadStatus) => void;
  uploadMsg: string;
  setUploadMsg: (uploadMsg: string) => void;
  rounded: boolean;
}

const GlobalContext = createContext<IUseGlobal | undefined>(undefined);

type TGlobalProvider = IChildren & IUseGlobal;

export const GlobalProvider = (props: TGlobalProvider) => {
  const [ isUploading, setIsUploading ] = useState(false);
  const [ uploadProgress, setUploadProgress ] = useState(0);
  const [ uploadStatus, setUploadStatus ] = useState<TUploadStatus>('idle');
  const [ uploadMsg, setUploadMsg ] = useState<string>('');
  const { children, theme, gradientBg, upload, rounded } = props;
  const value: IUseGlobal = {
    theme,
    gradientBg,
    upload,
    isUploading,
    setIsUploading,
    uploadProgress,
    setUploadProgress,
    uploadStatus,
    setUploadStatus,
    uploadMsg,
    setUploadMsg,
    rounded,
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
