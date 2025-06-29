import { StyledAction, StyledBorder } from "./Actions.style";
import Icon from "@components/Icon";
import CheckIcon from "@components/Icons/CheckIcon";
import { useGlobal } from "@components/GlobalProvider";
import { ISelectedFiles } from "@typings";

const UploadAction = ({ selectedFiles }: ISelectedFiles) => {
  const { theme, gradientBg, upload, setIsUploading, setUploadProgress } = useGlobal();

  const uploadFile = async () => {
    try {
      setIsUploading(true);
      
      const formData = new FormData();
      for (const file of selectedFiles) {
        formData.append(upload.fileFieldName, file);
      }

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            const progress = (event.loaded / event.total) * 100;
            setUploadProgress(progress);

            if (progress === 100) {
              setTimeout(() => {
                setIsUploading(false);
                setUploadProgress(0);
              }, 800);
            }
          }
        });

        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const result = JSON.parse(xhr.responseText);
              console.log('Upload successful:', result);
              resolve(result);
            } catch (error) {
              reject(new Error('Invalid response format'));
            }
          } else {
            reject(new Error(`Upload failed: ${xhr.status} ${xhr.statusText}`));
          }
        });

        xhr.addEventListener('error', () => {
          reject(new Error('Network error occurred'));
        });

        xhr.addEventListener('timeout', () => {
          reject(new Error('Upload timed out'));
        });

        xhr.open('POST', upload.serverUrl);
        xhr.timeout = 300000; // 5 minute timeout
        
        // Set headers
        Object.entries(upload.headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });

        xhr.send(formData);
      });
      
    } catch (error) {
      console.error('Upload error:', error);
      console.error(`Upload failed: ${error.message}`);
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