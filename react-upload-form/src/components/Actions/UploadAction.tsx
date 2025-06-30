import { StyledAction, StyledBorder } from "./Actions.style";
import Icon from "@components/Icon";
import CheckIcon from "@components/Icons/CheckIcon";
import { useGlobal } from "@components/GlobalProvider";
import { ISelectedFiles } from "@typings";
import Uploader from "@helpers/Uploader";

const UploadAction = ({ selectedFiles }: ISelectedFiles) => {
  const { 
    theme, 
    gradientBg, 
    upload, 
    setIsUploading, 
    setUploadProgress, 
    setUploadStatus,
    setUploadMsg,
  } = useGlobal();

  const uploadFile = async () => {
    setIsUploading(true);

    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append(upload.fileFieldName, file);
    }

    const uploader = new Uploader();
    uploader.setServerUrl(upload.serverUrl);
    uploader.setHeaders(upload.headers);
    uploader.setFormData(formData);
    uploader.setUploadProgressFn(setUploadProgress);
    uploader.setIsUploadingFn(setIsUploading);
    uploader.setOnUploadFinished(() => {
      setUploadStatus(uploader.getUploadStatus());
      setUploadMsg(uploader.getUploadMsg());
    });

    await uploader.upload();
  }

  return (
    <StyledAction theme={theme} gradientBg={gradientBg} onClick={uploadFile}>
      <StyledBorder />
      <Icon width={64} height={64}>
        <CheckIcon />
      </Icon>
    </StyledAction>
  );
};

export default UploadAction;