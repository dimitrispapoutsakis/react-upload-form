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
  border-radius: 50%;
  background-color: ${({ theme, gradientBg }) => gradientBg ? 'transparent' : (isLightTheme(theme) ? whiteAlto : darkBunker)};
  cursor: pointer;
`