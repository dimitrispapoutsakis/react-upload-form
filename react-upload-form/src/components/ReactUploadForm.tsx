import { IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { defaultIconSize } from "constants/generic";
import { StyledReactUploadForm, StyledTextGradient, StyledBorderContainer } from "./ReactUploadForm.style";
import Ink from 'react-ink'
import { useDropzone } from 'react-dropzone';
import { useState, useCallback } from 'react';
import { isLightTheme } from "@utils/theme.util";
import FilePreview from "./FileList";

export const ReactUploadForm = (props: IReactUploadForm) => {
	const {
		iconSize = 128,
		theme = 'light',
		rounded = true,
		gradientBg = true,
		gradientText = true,
		text = 'Choose file / Drag & drop',
		secondaryText = '',
		placeholderStyle = {},
		style = {},
		onDrop,
		onDropAccepted,
		onDropRejected,
		onDragEnter,
		onDragLeave,
		onDragOver,
		accept,
		maxSize,
		minSize,
		maxFiles,
		multiple = true,
		disabled = false,
		...rest
	} = props;

	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [rejectedFiles, setRejectedFiles] = useState<any[]>([]);
	const [ fileType, setFileType ] = useState('')

	/* Drop handling... */
	const handleDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[], event: any) => {
		setSelectedFiles(acceptedFiles);
		setRejectedFiles(rejectedFiles);

		if (onDrop) onDrop(acceptedFiles, rejectedFiles, event);
	}, [onDrop]);

	const handleDropAccepted = useCallback((acceptedFiles: File[], event: any) => {
		setSelectedFiles(acceptedFiles);
		setRejectedFiles([]);

		if (onDropAccepted) onDropAccepted(acceptedFiles, event);
	}, [onDropAccepted]);

	const handleDropRejected = useCallback((rejectedFiles: any[], event: any) => {
		setRejectedFiles(rejectedFiles);

		if (onDropRejected) onDropRejected(rejectedFiles, event);
	}, [onDropRejected]);

	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
		onDrop: handleDrop,
		onDropAccepted: handleDropAccepted,
		onDropRejected: handleDropRejected,
		accept,
		maxSize,
		minSize,
		maxFiles,
		multiple,
		disabled,
	});

	const hasFiles = selectedFiles.length > 0;

	return (
		<StyledReactUploadForm
			theme={theme}
			rounded={rounded}
			gradientBg={gradientBg}
			style={style}
			hasFiles={hasFiles}
		>
			{ !hasFiles && (
			<StyledBorderContainer
				{...getRootProps()}
				{...rest}
				theme={theme}
				style={placeholderStyle}
				isDragActive={isDragActive}
				isDragAccept={isDragAccept}
				isDragReject={isDragReject}
			>
				<input {...getInputProps()} />
				<Icon width={iconSize} height={iconSize}>
					<UploadIcon />
				</Icon>
				<b css={[gradientText && StyledTextGradient]}>
					{isDragActive
						? (isDragReject ? 'File type not accepted!' : 'Drop the files here...')
						: text
					}
				</b>
				{secondaryText && <small style={{ marginTop: '10px' }} css={[gradientText && StyledTextGradient]}>{secondaryText}</small>}
				<Ink />
			</StyledBorderContainer>
			) }

			{
				hasFiles && (
					<FilePreview
						theme={theme}
						selectedFiles={selectedFiles}
						rejectedFiles={rejectedFiles}
						onDrop={handleDrop}
						setSelectedFiles={setSelectedFiles}
					/>
				)}
		</StyledReactUploadForm>
	)
};