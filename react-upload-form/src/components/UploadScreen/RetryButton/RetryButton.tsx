import { IChildren } from "@typings";
import Ink from 'react-ink';
import { StyledRetryButton } from './RetryButton.style';

const RetryButton = ({ children }: IChildren) => {
  return (
    <StyledRetryButton>
      <Ink />
      <b>{ children }</b>
    </StyledRetryButton>
  );
};

export default RetryButton;