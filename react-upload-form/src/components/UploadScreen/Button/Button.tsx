import { IRestProps, TTheme } from "@typings";
import Ink from 'react-ink';
import { StyledButton } from './Button.style';
import { useGlobal } from "@components/GlobalProvider";

const Button = ({ children, ...rest }: IRestProps) => {
  const { rounded, gradientBg, theme } = useGlobal();
  
  return (
    <StyledButton 
      rounded={rounded} 
      gradientBg={gradientBg} 
      theme={theme} 
      {...rest}
    >
      <Ink />
      <b>{ children }</b>
    </StyledButton>
  );
};

export default Button;