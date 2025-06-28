import { CSSProperties } from "react";
import { DropzoneOptions } from "react-dropzone";

/* Components... */
export interface IReactUploadForm extends Omit<DropzoneOptions, 'onDrop'> {
    iconSize?: number;
    theme: TTheme;
    rounded?: boolean;
    gradientBg?: boolean;
    gradientText?: boolean;
    text?: string;
    style?: CSSProperties;
    placeholderStyle?: CSSProperties;
    secondaryText?: string;
    onDrop?: (acceptedFiles: File[], rejectedFiles: any[], event: any) => void;
}

/* Theme... */
export type TTheme = 'light' | 'dark';