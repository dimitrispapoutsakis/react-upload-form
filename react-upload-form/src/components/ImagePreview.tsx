import { IModifiedFile } from "@typings";
import FadeInAnimation from "./Animations/FadeInAnimation";
import BlurInAnimation from "./Animations/BlurInAnimation";

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
    <BlurInAnimation>
      <img style={{objectFit: 'contain' }} width={256} height={256} src={modifiedSelectedFile.src} />
    </BlurInAnimation>
  );
};

export default imagePreview;