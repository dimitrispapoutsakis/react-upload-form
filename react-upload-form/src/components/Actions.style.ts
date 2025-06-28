import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TTheme } from '@typings';
import { isLightTheme } from '@utils/theme.util';
import { whiteAlto, darkBunker } from 'constants/theme';

export const ActionsStyle = css`
  display: flex;
  align-self: flex-end;
`

export const StyledAction = styled.div<{ theme: TTheme, gradientBg: boolean }>`
  position: relative;
  border-radius: 50%;
  background-color: ${({ theme, gradientBg }) => gradientBg ? 'transparent' : (isLightTheme(theme) ? whiteAlto : darkBunker)};
  cursor: pointer;
  padding: 5px;
`

export const StyledBorder = styled.div`
  background: linear-gradient(to right, #6a5acd, #ff6347);
     -webkit-mask:
    radial-gradient(circle, transparent 5%, rgba(255, 255, 255, .55) 61%);
  mask:
    radial-gradient(circle, transparent 5%, rgba(255, 255, 255, .55) 61%);
  display: flex;
  -webkit-mask-composite: xor;
  // mask-composite: xor;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 50%;
  transition: opacity .25s ease;
  opacity: 0;
  &:hover {
    opacity: 1
  }
`