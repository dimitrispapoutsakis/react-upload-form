import { IModifiedFile } from "@typings";

interface IFilePreview {
  selectedFile: IModifiedFile;
}

const imagePreview = ({ selectedFile }: IFilePreview) => {
  const modifiedSelectedFile = {
    name: selectedFile.name,
    size: selectedFile.size,
    type: selectedFile.type,
    src: URL.createObjectURL(selectedFile),
  }

  return (
    <div>
      <img style={{objectFit: 'contain' }} width={256} height={256} src={modifiedSelectedFile.src} />
    </div>
  );
};

export default imagePreview;