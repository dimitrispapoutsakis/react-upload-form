import { TUploadStatus } from "@typings";

export const isUploadStatusFailed  = (uploadStatus: TUploadStatus) => uploadStatus === 'failed';
export const isUploadStatusUploading = (uploadStatus: TUploadStatus) => uploadStatus === 'uploading';
export const isUploadStatusIdle = (uploadStatus: TUploadStatus) => uploadStatus === 'idle';