import Ink from "react-ink";
import { StyledAction, StyledBorder } from "./Actions.style";
import Icon from "@components/Icon";
import CheckIcon from "@components/Icons/CheckIcon";
import { useGlobal } from "@components/GlobalProvider";
import { ISelectedFiles } from "@typings";

const UploadAction = ({ selectedFiles }: ISelectedFiles) => {
  const { theme, gradientBg, upload } = useGlobal();

  const uploadFile = async () => {
    console.log('Upload button clicked');
    console.log('Selected files:', selectedFiles);
    console.log('Upload config:', upload);
    
    if (selectedFiles.length === 0) {
      console.error('No files selected');
      return;
    }

    const formData = new FormData();
    for (const file of selectedFiles) {
      console.log('Appending file:', file.name, file.size, file.type);
      formData.append(upload.fileFieldName, file);
    }

    try {
      console.log('Sending request to:', upload.serverUrl);
      const response = await fetch(upload.serverUrl, {
        method: 'POST',
        body: formData,
        headers: { ...upload.headers }
      });
      
      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response:', result);
    } catch (error) {
      console.error('Upload error:', error);
    }
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