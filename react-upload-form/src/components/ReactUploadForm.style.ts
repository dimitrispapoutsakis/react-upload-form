import styled from "@emotion/styled";
import { TTheme } from "@typings";
import { isLightTheme } from "@utils/theme.util";
import { borderRadius, darkBunker, linearGradientDark, linearGradientLight, mercury, whiteAlto } from "constants/theme";

export default styled.div<{ theme: TTheme, rounded: boolean, gradientBg: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => isLightTheme(theme) ? mercury : 'black'};
    width: fit-content;
    padding: 25px;
    background: ${({ theme, gradientBg }) => gradientBg ? (isLightTheme(theme) ? linearGradientLight : linearGradientDark) : 'none'};
    background-color: ${({ theme, gradientBg }) => gradientBg ? 'transparent' : (isLightTheme(theme) ? whiteAlto : darkBunker)};
    border-radius: ${({ rounded }) => (rounded ? borderRadius : '0px')};
`;