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

export interface IChildren {
    [key: string]: string;
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

export type TUploadStatus = 'idle' | 'uploading' | 'succeeded' | 'failed';

/* Misc... */
export enum ELayoutLevel {
    high = 1,
    max = 2,
}