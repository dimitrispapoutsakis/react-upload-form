import Ink from "react-ink";
import { StyledAction, StyledBorder } from "./Actions.style";
import Icon from "./Icon";
import CheckIcon from "./Icons/CheckIcon";

const UploadAction = () => {

  return (
    <StyledAction theme={theme} gradientBg={gradientBg}>
      <StyledBorder />
      <Icon width={64} height={64}>
        <CheckIcon />
      </Icon>
      {renderInk && <Ink />}
    </StyledAction>
  );
};

export default UploadAction;