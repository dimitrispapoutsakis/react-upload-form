import { TTheme } from "@typings";
import { formatFileSize } from "@utils/formatting.util";
import { Dispatch, SetStateAction, useCallback } from "react";
import { FileListStyle, StyledFileList, StyledFileName, StyledFileSize } from "./FileList.style";
import Icon from "./Icon";
import TrashIcon from "./Icons/TrashIcon";

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
                <div key={index} style={{marginTop: '15px'}}>
                    <StyledFileList>
                        <div style={{flex: 1}}>
                            <StyledFileName theme={theme}>
                                {file.name}
                            </StyledFileName>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <StyledFileSize theme={theme}>
                                {formatFileSize(file.size)}
                            </StyledFileSize>
                            <Icon onClick={() => removeFile(index)} style={{ cursor: 'pointer'}}>
                                <TrashIcon />
                            </Icon>
                        </div>
                    </StyledFileList>
                </div>
            ))}
        </div>
    );
}

export default FilePreview;