import { TTheme } from "@typings";
import { formatFileSize } from "@utils/formatting.util";
import { Dispatch, SetStateAction, useCallback } from "react";
import { FileListStyle, StyledFileList, StyledFileName, StyledFileSize } from "./FileList.style";
import Icon from "./Icon";
import TrashIcon from "./Icons/TrashIcon";
import BlurInAnimation from "./Animations/BlurInAnimation";
import SlideInUpAnimation from "./Animations/SlideInUpAnimation";

interface IFilePreview {
    theme: TTheme;
    selectedFiles: Array<File>;
    rejectedFiles: Array<File>;
    onDrop: (acceptedFiles: File[], rejectedFiles: any[], event: any) => void;
    setSelectedFiles: Dispatch<SetStateAction<File[]>>;
}

const FilePreview = (props: IFilePreview) => {
    const { theme, selectedFiles, rejectedFiles, onDrop, setSelectedFiles } = props;

    const removeFile = useCallback((index: number) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);

        if (onDrop) {
            onDrop(newFiles, rejectedFiles, {} as any);
        }
    }, [selectedFiles, rejectedFiles, onDrop]);

    return (
        <div css={FileListStyle} >
            {selectedFiles.map((file, index) => (
                <SlideInUpAnimation key={index} style={{ marginTop: '15px' }} delay={index * .1}>
                    <StyledFileList>
                        <div style={{ flex: 1 }}>
                            <StyledFileName theme={theme}>
                                {file.name}
                            </StyledFileName>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                            <StyledFileSize theme={theme}>
                                {formatFileSize(file.size)}
                            </StyledFileSize>
                            <Icon onClick={() => removeFile(index)} style={{ cursor: 'pointer' }}>
                                <TrashIcon />
                            </Icon>
                        </div>
                    </StyledFileList>
                </SlideInUpAnimation>
            ))}
        </div>
    );
}

export default FilePreview;