import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TTheme } from '@typings';

export const ProgressBarStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 16px 0;
`;

export const StyledProgressBar = styled.div<{ theme: TTheme, gradientBg: boolean }>`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme === 'dark' ? '#2a2a2a' : '#e0e0e0'};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: ${({ theme }) => theme === 'dark' 
    ? 'inset 0 1px 3px rgba(0, 0, 0, 0.3)' 
    : 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
  };
`;

export const StyledProgressIndicator = styled.div<{ theme: TTheme; gradientBg: boolean }>`
  height: 100px;
  width: 100%;
  border-radius: 4px;
  ${({ gradientBg }) => gradientBg && css`
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  `}
  ${({ theme, gradientBg }) => !gradientBg && (theme === 'dark' ? css`
    background-color: #4a9eff;
  ` : css`
    background-color: #2196f3;
  `)}
  box-shadow: ${({ theme }) => theme === 'dark' 
    ? '0 0 8px rgba(74, 158, 255, 0.4)' 
    : '0 0 8px rgba(33, 150, 243, 0.3)'
  };
`;
