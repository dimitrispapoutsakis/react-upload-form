import { MotionProps } from "framer-motion";
import { CSSProperties, ReactNode } from "react";
import { DropzoneOptions } from "react-dropzone";

/* Components... */
export interface IReactUploadForm extends Omit<DropzoneOptions, 'onDrop'> {
    iconSize?: number;
    theme?: TTheme;
    rounded?: boolean;
    gradientBg?: boolean;
    gradientText?: boolean;
    text?: string;
    style?: CSSProperties;
    placeholderStyle?: CSSProperties;
    secondaryText?: string;
    upload: IUploadProp;
    onDrop?: (acceptedFiles: File[], rejectedFiles: any[], event: any) => void;
}

export interface IUploadProp {
    serverUrl: string;
    fileFieldName: string;
    headers: HeadersInit;
}

export interface ISelectedFiles {
    selectedFiles: File[];
    setSelectedFiles: (selectedFiles: File[]) => void;
}

export interface IChildren {
    children: ReactNode;
}

/* Theme... */
export type TTheme = 'light' | 'dark';

/* Generic... */
export interface IModifiedFile extends File {
    src: string;
}

export interface IRestProps {
    [key: string]: any;
}

export type TMotionTransition = Pick<MotionProps, 'transition'>;

export type TAnimation = IChildren & IRestProps & TMotionTransition;