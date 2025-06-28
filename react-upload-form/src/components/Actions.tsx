import { TTheme } from "@typings";
import { ActionsStyle, StyledAction, StyledBorder } from "./Actions.style";
import Icon from "./Icon";
import CheckIcon from "./Icons/CheckIcon";
import TrashIcon from "./Icons/TrashIcon";
import { useState } from "react";
import Ink from "react-ink";

interface IActions {
  theme: TTheme;
  gradientBg: boolean;
}

const Actions = ({ theme, gradientBg }: IActions) => {
  const [ renderInk, setRenderInk ] = useState(false);

  return (
    <div css={ActionsStyle}>
      <StyledAction theme={theme} gradientBg={gradientBg}>
        <StyledBorder />
        <Icon width={64} height={64}>
          <CheckIcon />
        </Icon>
        { renderInk && <Ink /> }
      </StyledAction>

      <StyledAction theme={theme} gradientBg={gradientBg}>
        <StyledBorder />
        <Icon width={64} height={64}>
          <TrashIcon />
        </Icon>
        { renderInk && <Ink /> }
      </StyledAction>
    </div>
  );
}

export default Actions;