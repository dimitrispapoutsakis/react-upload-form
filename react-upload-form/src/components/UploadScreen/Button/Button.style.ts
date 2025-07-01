import { borderRadius, darkBismark, darkBunker, darkEbonyClay, darkPickledBluewood, grayMineShaft, linearGradientDark, linearGradientDarkSecondary, linearGradientLight, linearGradientLightSecondary, silver, whiteAlto } from "@constants/theme";
import styled from "@emotion/styled";
import { TTheme } from "@typings";
import { isLightTheme } from "@utils/theme.util";

export const StyledButton = styled.button<{ theme: TTheme, rounded: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme === 'light' ? '#6a5acd' : '#ff6347'};
  color: white;
  padding: 10px 20px;
  background-color: transparent;
  border-radius: ${({ rounded }) => rounded ? borderRadius : '0'};
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.25s ease;
  &:hover {
    background: ${({ theme }) => isLightTheme(theme) ? silver : darkPickledBluewood};
  }
`;