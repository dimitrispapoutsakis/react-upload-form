class Uploader {
  private formData!: FormData;
  private xhr!: XMLHttpRequest;
  private progress: number = 0;
  private serverUrl: string = '';
  private headers: HeadersInit = {};
  private onUploadFinished: () => void = () => {};
  private setUploadProgress: (progress: number) => void = () => {};
  protected fiveMinutes: number = 300000;

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
          console.log('Upload successful:', result);
          resolve(result);
        } catch (error) {
          reject(new Error('Invalid response format'));
        }
      } else {
        reject(new Error(`Upload failed: ${this.xhr.status} ${this.xhr.statusText}`));
      }
    });
  }

  onError(reject: (error: Error) => void) {
    this.xhr.addEventListener('error', () => {
      reject(new Error('Network error occurred'));
    });
  }

  onTimeout(reject: (error: Error) => void) {
    this.xhr.addEventListener('timeout', () => {
      reject(new Error('Upload timed out'));
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
      console.error('Upload error:', error);
      alert(`Upload failed: ${error.message}`);
    }
  }
}

export default Uploader;