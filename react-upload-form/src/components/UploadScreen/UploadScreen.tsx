import { TextGradientStyle } from "@components/ReactUploadForm.style";
import { ButtonContainerStyle, StyledLoadingText, StyledOverlay, StyledUploadScreen } from "./UploadScreen.style";
import { useGlobal } from "@components/GlobalProvider";
import { isUploadStatusFailed } from "@utils/upload.util";
import ErrorAlert from "./ErrorAlert/ErrorAlert";
import Button from "./Button/Button";

const UploadScreen = () => {
  const { isUploading, uploadProgress, uploadStatus, uploadMsg } = useGlobal();
  if (!isUploading) return null;
  const formattedUploadProgress = uploadProgress.toFixed(2);

  return (
    <StyledUploadScreen>
      <StyledOverlay />
      <StyledLoadingText style={{ fontSize: '3.5rem' }} css={TextGradientStyle}>
        {formattedUploadProgress}%
      </StyledLoadingText>

      {isUploadStatusFailed(uploadStatus) && (
        <>
          <ErrorAlert text={uploadMsg} />
          <div id="test" css={ButtonContainerStyle}>
            <Button style={{ marginRight: '5px' }}> Retry </Button>
            <Button style={{ marginLeft: '5px' }}> Close </Button>
          </div>
        </>
      )}
    </StyledUploadScreen>
  );
};

export default UploadScreen;