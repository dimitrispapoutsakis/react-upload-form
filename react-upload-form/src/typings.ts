/* Components... */
export interface IReactUploadForm {
    iconSize?: number;
    theme: TTheme;
    rounded?: boolean;
    gradientBg?: boolean;
    gradientText?: boolean;
    text?: string;
}

/* Theme... */
export type TTheme = 'light' | 'dark';