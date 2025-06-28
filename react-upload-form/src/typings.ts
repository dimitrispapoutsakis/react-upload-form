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
    upload: {
        serverUrl: string;
        fileFieldName: string;
        headers: HeadersInit;
    }
    onDrop?: (acceptedFiles: File[], rejectedFiles: any[], event: any) => void;
}

export interface ISelectedFiles {
    selectedFiles?: File[];
    setSelectedFiles: (selectedFiles: File[]) => void;
}

/* Theme... */
export type TTheme = 'light' | 'dark';

/* Generic... */
export interface IModifiedFile extends File {
    src: string;
}