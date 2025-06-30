import { TUploadStatus } from "@typings";

class Uploader {
  private formData!: FormData;
  private xhr!: XMLHttpRequest;
  private progress: number = 0;
  private serverUrl: string = '';
  private headers: HeadersInit = {};
  private onUploadFinished: () => void = () => { };
  private setUploadProgress: (progress: number) => void = () => { };
  protected fiveMinutes: number = 300000;
  private uploadStatus: TUploadStatus = 'idle';
  private uploadMsg: string = '';

  setServerUrl(serverUrl: string) {
    this.serverUrl = serverUrl;
  }

  setHeaders(headers: HeadersInit) {
    this.headers = headers;
  }

  setFormData(formData: FormData) {
    this.formData = formData;
  }

  setOnUploadFinished(onUploadFinished: () => void) {
    this.onUploadFinished = onUploadFinished;
  }

  setSetUploadProgress(setUploadProgress: (progress: number) => void) {
    this.setUploadProgress = setUploadProgress;
  }

  onProgress(progress: number) {
    this.uploadStatus = 'uploading';
    this.xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        this.progress = progress;
        this.setUploadProgress(progress);

        if (progress === 100) {
          this.onUploadFinished();
        }
      }
    });
  }

  onLoad(resolve: (result: any) => void, reject: (error: Error) => void) {
    this.xhr.addEventListener('load', () => {
      if (this.xhr.status >= 200 && this.xhr.status < 300) {
        try {
          const result = JSON.parse(this.xhr.responseText);
          this.uploadStatus = 'succeeded';
          resolve(result);
        } catch (error) {
          this.uploadStatus = 'failed';
          reject(new Error('Invalid response format'));
        }
      } else {
        this.uploadStatus = 'failed';
        reject (new Error(`Upload failed: ${this.xhr.status} ${this.xhr.statusText}`));
      }
    });
  }

  onError(reject: (error: string) => void) {
    this.xhr.addEventListener('error', () => {
      this.uploadStatus = 'failed';
      this.uploadMsg = 'Network error occurred';
      reject(this.uploadMsg);
    });
  }

  onTimeout(reject: (error: string) => void) {
    this.xhr.addEventListener('timeout', () => {
      this.uploadStatus = 'failed';
      this.uploadMsg = 'Upload timed out';
      reject(this.uploadMsg);
    });
  }

  upload() {
    try {
      return new Promise((resolve, reject) => {
        this.xhr = new XMLHttpRequest();

        this.onProgress(this.progress);
        this.onLoad(resolve, reject);
        this.onError(reject);
        this.onTimeout(reject);

        this.xhr.open('POST', this.serverUrl);
        this.xhr.timeout = this.fiveMinutes;

        Object.entries(this.headers).forEach(([key, value]) => {
          this.xhr.setRequestHeader(key, value);
        });

        this.xhr.send(this.formData);
      });
    } catch (error: any) {
      this.uploadStatus = 'failed';
      this.uploadMsg = error.message;
    }
  }
}

export default Uploader;