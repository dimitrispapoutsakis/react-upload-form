import { TextGradientStyle } from "@components/ReactUploadForm.style";
import { ButtonContainerStyle, StyledLoadingText, StyledOverlay, StyledUploadScreen } from "./UploadScreen.style";
import { useGlobal } from "@components/GlobalProvider";
import { isUploadStatusFailed, isUploadStatusIdle, isUploadStatusUploading } from "@utils/upload.util";
import ErrorAlert from "./ErrorAlert/ErrorAlert";
import Button from "./Button/Button";
import FadeInAnimation from "@components/Animations/FadeInAnimation";

const UploadScreen = () => {
  const {
    setUploadProgress,
    uploadProgress,
    uploadStatus,
    uploadMsg,
    uploadFile,
    setUploadStatus,
  } = useGlobal();
  if (isUploadStatusIdle(uploadStatus)) return null;
  const formattedUploadProgress = uploadProgress.toFixed(2);

  const onRetryClick = () => {
    setUploadProgress(0);
    uploadFile();
  }

  const onCloseClick = () => {
    setUploadProgress(0);
    setUploadStatus('idle');
  }

  return (
    <StyledUploadScreen>
      <StyledOverlay />
      <StyledLoadingText uploadStatus={uploadStatus} style={{ fontSize: '3.5rem' }} css={TextGradientStyle}>
        {formattedUploadProgress}%
      </StyledLoadingText>

      {isUploadStatusFailed(uploadStatus) && (
        <>
          <ErrorAlert text={uploadMsg} />
          <div css={ButtonContainerStyle}>
            <FadeInAnimation>
              <Button style={{ marginRight: '5px' }} onClick={onRetryClick}> Retry </Button>
            </FadeInAnimation>

            <FadeInAnimation delay={0.10}>
              <Button style={{ marginLeft: '5px' }} onClick={onCloseClick}> Close </Button>
            </FadeInAnimation>
          </div>
        </>
      )}
    </StyledUploadScreen>
  );
};

export default UploadScreen;