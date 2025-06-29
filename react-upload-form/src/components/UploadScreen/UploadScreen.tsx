import { TextGradientStyle } from "@components/ReactUploadForm.style";
import { StyledLoadingText, StyledOverlay, StyledUploadScreen } from "./UploadScreen.style";
import { useGlobal } from "@components/GlobalProvider";

const UploadScreen = () => {
  const { isUploading, uploadProgress } = useGlobal();
  if (!isUploading) return null;
  const formattedUploadProgress = uploadProgress.toFixed(2);

  return (
    <StyledUploadScreen>
      <StyledOverlay />
      <StyledLoadingText css={TextGradientStyle}>
        {formattedUploadProgress}%
      </StyledLoadingText>
    </StyledUploadScreen>
  );
};

export default UploadScreen;