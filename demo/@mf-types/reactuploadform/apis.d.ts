
    export type RemoteKeys = 'reactuploadform';
    type PackageType<T> = T extends 'reactuploadform' ? typeof import('reactuploadform') :any;