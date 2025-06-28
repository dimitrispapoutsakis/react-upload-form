import { TTheme } from "@typings";
import { ActionsStyle, StyledAction } from "./Actions.style";
import Icon from "./Icon";
import CheckIcon from "./Icons/CheckIcon";
import TrashIcon from "./Icons/TrashIcon";

interface IActions {
  theme: TTheme;
  gradientBg: boolean;
}

const Actions = ({ theme, gradientBg }: IActions) => {
  return (
    <div css={ActionsStyle}>
      <StyledAction theme={theme} gradientBg={gradientBg}>
        <Icon width={64} height={64}>
          <CheckIcon />
        </Icon>
      </StyledAction>

      <StyledAction theme={theme} gradientBg={gradientBg}>
        <Icon width={64} height={64}>
          <TrashIcon />
        </Icon>
      </StyledAction>
    </div>
  );
}

export default Actions;