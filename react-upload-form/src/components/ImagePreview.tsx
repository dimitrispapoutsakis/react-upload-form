interface IFilePreview {
  selectedFile: File;
}

const imagePreview = ({ selectedFile }: IFilePreview) => {
  const imgSrc = URL.createObjectURL(selectedFile);

  return (
    <div>
      <img src={imgSrc} />
    </div>
  );
};

export default imagePreview;