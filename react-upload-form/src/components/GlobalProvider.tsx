import { createContext, useCallback, useContext, useState } from 'react';
import { IChildren, IUploadProp, TTheme, TUploadStatus } from '@typings';
import Uploader from '@helpers/Uploader';
import { StyledUploadScreen } from './UploadScreen/UploadScreen.style';

interface IUseGlobal {
  theme: TTheme;
  gradientBg: boolean;
  upload: IUploadProp;
  uploadProgress: number;
  setUploadProgress: (uploadProgress: number) => void;
  uploadStatus: TUploadStatus;
  setUploadStatus: (uploadStatus: TUploadStatus) => void;
  uploadMsg: string;
  setUploadMsg: (uploadMsg: string) => void;
  rounded: boolean;
  selectedFiles: File[];
  setSelectedFiles: (selectedFiles: File[]) => void;
  uploadFile: () => Promise<void>;
}

const GlobalContext = createContext<IUseGlobal | undefined>(undefined);

type TGlobalProvider = IChildren & IUseGlobal;

export const GlobalProvider = (props: TGlobalProvider) => {
  const [ uploadProgress, setUploadProgress ] = useState(0);
  const [ uploadStatus, setUploadStatus ] = useState<TUploadStatus>('idle');
  const [ uploadMsg, setUploadMsg ] = useState<string>('');
  const { children, theme, gradientBg, upload, rounded, selectedFiles, setSelectedFiles } = props;

  const uploadFile = useCallback(async () => {
    setUploadStatus('uploading');
    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append(upload.fileFieldName, file);
    }

    const uploader = new Uploader()
    .setServerUrl(upload.serverUrl)
    .setHeaders(upload.headers)
    .setFormData(formData)
    .onUploadProgress((progress) => setUploadProgress(progress))
    .onUploadStatusChange((uploadStatus) => setUploadStatus(uploadStatus))
    .onUploadFinished(() => {
      setUploadMsg(uploader.getUploadMsg());
    });

    await uploader.upload();
  }, [selectedFiles, upload]);

  const value: IUseGlobal = {
    theme,
    gradientBg,
    upload,
    uploadProgress,
    setUploadProgress,
    uploadStatus,
    setUploadStatus,
    uploadMsg,
    setUploadMsg,
    rounded,
    selectedFiles,
    setSelectedFiles,
    uploadFile,
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
