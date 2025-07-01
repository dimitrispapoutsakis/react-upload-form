import { StyledAction, StyledBorder } from "./Actions.style";
import Icon from "@components/Icon";
import { useGlobal } from "@components/GlobalProvider";
import TrashIcon from "@components/Icons/TrashIcon";

const DiscardAction = () => {
  const { theme, gradientBg, setSelectedFiles } = useGlobal();

  return (
    <StyledAction theme={theme} gradientBg={gradientBg} onClick={() => setSelectedFiles([])}>
      <StyledBorder />
      <Icon width={64} height={64}>
        <TrashIcon />
      </Icon>
    </StyledAction>
  );
};

export default DiscardAction;