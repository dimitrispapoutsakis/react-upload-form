import { TUploadStatus } from "@typings";

export const isUploadStatusFailed  = (uploadStatus: TUploadStatus) => uploadStatus === 'failed';