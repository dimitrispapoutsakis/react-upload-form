import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TTheme } from "@typings";
import { isLightTheme } from "@utils/theme.util";
import { borderRadius, darkBunker, darkPickledBluewood, linearGradientDark, linearGradientLight, mercury, silver, silver2, whiteAlto } from "constants/theme";

export const StyledReactUploadForm = styled.div<{ theme: TTheme, rounded: boolean, gradientBg: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => isLightTheme(theme) ? mercury : 'black'};
    min-width: 350px;
    padding: 25px 15px;
    background: ${({ theme, gradientBg }) => gradientBg ? (isLightTheme(theme) ? linearGradientLight : linearGradientDark) : 'none'};
    background-color: ${({ theme, gradientBg }) => gradientBg ? 'transparent' : (isLightTheme(theme) ? whiteAlto : darkBunker)};
    border-radius: ${({ rounded }) => (rounded ? borderRadius : '0px')};
    user-select: none;
`;

export const StyledTextGradient = css`
    background: linear-gradient(74deg, blue 0%, red 9%, yellow 20%, blue 24%, red 35%, blue 44%, red 50%, blue 56%, red 75%, blue 100%);
    background-image: linear-gradient(to right, #6a5acd, #ff6347);
    -webkit-background-clip: text; /* For WebKit browsers */
    background-clip: text;
    color: transparent;
   -webkit-text-fill-color: transparent; /* For WebKit browsers, often redundant with color: transparent but good for compatibility */
`

export const StyledBorderContainer = styled.div<{ theme: TTheme }>`
    border: 2px dashed ${darkPickledBluewood};
    padding: 20px;
    border-radius: ${borderRadius};
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    cursor: pointer;
    transition: transform .25s ease;
    &:hover {
        transform: scale3d(1.05, 1.05, 1.05);
    }
`