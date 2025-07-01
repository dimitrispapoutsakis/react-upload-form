import { borderRadius, darkBunker, grayMineShaft, linearGradientDarkSecondary, linearGradientLightSecondary, whiteAlto } from "@constants/theme";
import styled from "@emotion/styled";
import { TTheme } from "@typings";
import { isLightTheme } from "@utils/theme.util";

export const StyledButton = styled.button<{ theme: TTheme, gradientBg: boolean, rounded: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme === 'light' ? '#6a5acd' : '#ff6347'};
  color: white;
  padding: 10px 20px;
  background: ${({ theme, gradientBg }) => gradientBg ? (isLightTheme(theme) ? linearGradientLightSecondary : linearGradientDarkSecondary) : 'none'};
  background-color: ${({ theme, gradientBg }) => gradientBg ? 'transparent' : (isLightTheme(theme) ? whiteAlto : darkBunker)};
  border-radius: ${({ rounded }) => rounded ? borderRadius : '0'};
  color: ${({ theme }) => isLightTheme(theme) ? grayMineShaft : '#fff' };
  outline: none;
  border: none;
  cursor: pointer;
`;