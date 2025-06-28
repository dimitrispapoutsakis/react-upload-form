import Ink from "react-ink";
import { StyledAction, StyledBorder } from "./Actions.style";
import Icon from "@components/Icon";
import CheckIcon from "@components/Icons/CheckIcon";
import { useGlobal } from "@components/GlobalProvider";
import { ISelectedFiles } from "@typings";

const UploadAction = ({selectedFiles}: ISelectedFiles) => {
  const { theme, gradientBg } = useGlobal();

  return (
    <StyledAction theme={theme} gradientBg={gradientBg}>
      <StyledBorder />
      <Icon width={64} height={64}>
        <CheckIcon />
      </Icon>
    </StyledAction>
  );
};

export default UploadAction;