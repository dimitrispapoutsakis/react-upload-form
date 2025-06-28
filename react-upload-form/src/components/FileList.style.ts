import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TTheme } from '@typings';
import { isLightTheme } from '@utils/theme.util';
import { silver2 } from 'constants/theme';

export const FileListStyle = css`
    width: 100%;
`

export const StyledFileList = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: center;
`
export const StyledFileName = styled.div<{ theme: TTheme }>`
    font-weight: bold;
    color: ${({ theme }) => isLightTheme(theme) ? '#333' : '#fff' };
`

export const StyledFileSize = styled.div<{ theme: TTheme }>`
    color: ${({ theme }) => isLightTheme(theme) ? '#666' : silver2 }};
`