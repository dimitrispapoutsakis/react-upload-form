import { TUploadStatus } from "@typings";

class Uploader {
  private formData!: FormData;
  private xhr!: XMLHttpRequest;
  private progress: number = 0;
  private serverUrl: string = '';
  private headers: HeadersInit = {};
  private _onUploadFinished: () => void = () => { };
  private _onUploadProgress: (progress: number) => void = () => { };
  protected fiveMinutes: number = 300000;
  private uploadStatus: TUploadStatus = 'idle';
  private uploadMsg: string = '';
  private _onUploadStatusChange: (uploadStatus: TUploadStatus) => void = () => { };

  setServerUrl(serverUrl: string) {
    this.serverUrl = serverUrl;
    return this;
  }

  setHeaders(headers: HeadersInit) {
    this.headers = headers;
    return this;
  }

  setFormData(formData: FormData) {
    this.formData = formData;
    return this;
  }

  onUploadFinished(_onUploadFinished: () => void) {
    this._onUploadFinished = _onUploadFinished;
    return this;
  }

  onUploadProgress(_onUploadProgress: (progress: number) => void) {
    this._onUploadProgress = _onUploadProgress;
    return this;
  }

  onUploadStatusChange(_onUploadStatusChange: (uploadStatus: TUploadStatus) => void) {
    this._onUploadStatusChange = _onUploadStatusChange;
    return this;
  }

  getUploadStatus = () => this.uploadStatus;

  getUploadMsg = () => this.uploadMsg;

  onProgress = async () => {
    this.xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        this.progress = progress;
        this._onUploadProgress(progress);

        if (progress === 100) {
          const finishDelay = this.getUploadStatus() === 'succeeded' ? 800 : 100;
          setTimeout(() => {
            if (this.getUploadStatus() === 'succeeded') {
              this._onUploadStatusChange('idle');
              this._onUploadProgress(0);
            }
            this._onUploadFinished();
          }, finishDelay);
        }
      }
    });
  }

  onLoad = async () => {
    this.xhr.addEventListener('load', () => {
      if (this.xhr.status >= 200 && this.xhr.status < 300) {
        try {
          const result = JSON.parse(this.xhr.responseText);
          this.uploadStatus = 'succeeded';
          this._onUploadStatusChange('succeeded');
          return result;
        } catch (error) {
          this.uploadStatus = 'failed';
          this.uploadMsg = 'Invalid response format';
          this._onUploadStatusChange('failed');
        }
      } else {
        this.uploadStatus = 'failed';
        this.uploadMsg = `Upload failed: ${this.xhr.status} ${this.xhr.statusText}`;
        this._onUploadStatusChange('failed');
      }
    });
  }

  onError = async () => {
    this.xhr.addEventListener('error', () => {
      this.uploadStatus = 'failed';
      this.uploadMsg = 'Network error occurred';
      this._onUploadStatusChange('failed');
    });
  }

  onTimeout = async () => {
    this.xhr.addEventListener('timeout', () => {
      this.uploadStatus = 'failed';
      this.uploadMsg = 'Upload timed out';
      this._onUploadStatusChange('failed');
    });
  }

  upload = async () => {
    try {
      this.xhr = new XMLHttpRequest();

      await this.onError();
      await this.onTimeout();
      await this.onLoad();
      await this.onProgress();

      this.xhr.open('POST', this.serverUrl);
      this.xhr.timeout = this.fiveMinutes;

      Object.entries(this.headers).forEach(([key, value]) => {
        this.xhr.setRequestHeader(key, value);
      });

      this.xhr.send(this.formData);

      return this.uploadStatus;
    } catch (error: any) {
      this.uploadStatus = 'failed';
      this.uploadMsg = error.message;
    }
  }
}

export default Uploader;