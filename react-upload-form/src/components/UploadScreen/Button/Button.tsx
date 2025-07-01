import { IRestProps, TTheme } from "@typings";
import Ink from 'react-ink';
import { StyledButton } from './Button.style';
import { useGlobal } from "@components/GlobalProvider";

const Button = ({ children, ...rest }: IRestProps) => {
  const { rounded, theme } = useGlobal();
  
  return (
    <StyledButton 
      rounded={rounded} 
      theme={theme} 
      {...rest}
    >
      <Ink />
      <b>{ children }</b>
    </StyledButton>
  );
};

export default Button;