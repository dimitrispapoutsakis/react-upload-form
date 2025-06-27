import { CSSProperties } from "react";

/* Components... */
export interface IReactUploadForm {
    iconSize?: number;
    theme: TTheme;
    rounded?: boolean;
    gradientBg?: boolean;
    gradientText?: boolean;
    text?: string;
    style?: CSSProperties;
    placeholderStyle?: CSSProperties;
    secondaryText?: string;
}

/* Theme... */
export type TTheme = 'light' | 'dark';