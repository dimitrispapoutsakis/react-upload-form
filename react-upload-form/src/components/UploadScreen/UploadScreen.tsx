import { TextGradientStyle } from "@components/ReactUploadForm.style";
import { StyledLoadingText, StyledOverlay, StyledUploadScreen } from "./UploadScreen.style";
import { cx } from "@emotion/css";
import { useGlobal } from "@components/GlobalProvider";
import BlurInAnimation from "@components/Animations/BlurInAnimation";
import FadeInAnimation from "@components/Animations/FadeInAnimation";

const UploadScreen = () => {
  const { isUploading } = useGlobal();
  if (!isUploading) return null;

  return (
    <StyledUploadScreen>
      <StyledOverlay />
      <StyledLoadingText css={TextGradientStyle}>
        0%
      </StyledLoadingText>
    </StyledUploadScreen>
  );
};

export default UploadScreen;