import Ink from "react-ink";
import { StyledAction, StyledBorder } from "./Actions.style";
import Icon from "@components/Icon";
import CheckIcon from "@components/Icons/CheckIcon";
import { useGlobal } from "@components/GlobalProvider";
import { ISelectedFiles } from "@typings";

const UploadAction = ({ selectedFiles }: ISelectedFiles) => {
  const { theme, gradientBg, upload, setIsUploading } = useGlobal();

  const uploadFile = async () => {
    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append(upload.fileFieldName, file);
    }

    setIsUploading(true);

    await fetch(upload.serverUrl, {
      method: 'POST',
      body: formData,
      headers: { ...upload.headers }
    });

    setTimeout(() => {
      setIsUploading(false);
    }, 500);
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