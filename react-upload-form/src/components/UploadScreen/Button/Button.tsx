import { IChildren } from "@typings";
import Ink from 'react-ink';
import { StyledButton } from './Button.style';

const Button = ({ children }: IChildren) => {
  return (
    <StyledButton>
      <Ink />
      <b>{ children }</b>
    </StyledButton>
  );
};

export default Button;