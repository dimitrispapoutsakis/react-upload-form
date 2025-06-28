import { IModifiedFile } from "@typings";

interface IFilePreview {
  selectedFile: IModifiedFile;
}

const imagePreview = ({ selectedFile }: IFilePreview) => {
  return (
    <div>
      <img style={{objectFit: 'contain' }} width={256} height={256} src={selectedFile.src} />
    </div>
  );
};

export default imagePreview;