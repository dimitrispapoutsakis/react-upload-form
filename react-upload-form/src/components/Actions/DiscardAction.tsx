import { StyledAction, StyledBorder } from "./Actions.style";
import Icon from "@components/Icon";
import { useGlobal } from "@components/GlobalProvider";
import TrashIcon from "@components/Icons/TrashIcon";

const DiscardAction = () => {
  const { theme, gradientBg } = useGlobal();

  return (
    <StyledAction theme={theme} gradientBg={gradientBg}>
      <StyledBorder />
      <Icon width={64} height={64}>
        <TrashIcon />
      </Icon>
    </StyledAction>
  );
};

export default DiscardAction;