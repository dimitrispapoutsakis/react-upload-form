import { IModifiedFile, IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { StyledReactUploadForm, StyledTextGradient, StyledBorderContainer } from "./ReactUploadForm.style";
import Ink from 'react-ink'
import { useDropzone } from 'react-dropzone';
import { useState, useCallback } from 'react';
import FilePreview from "./FileList";
import ImagePreview from "./ImagePreview";
import { isImgFile } from "@utils/generic";
import Actions from "./Actions/Actions";
import { GlobalProvider } from "@components/GlobalProvider";
import { m } from 'framer-motion';
import LayoutTransition from "./Animations/LayoutTransition";
import ProgressContainer from "./ProgrssContainer";

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
		upload,
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

	const fileCount = selectedFiles.length;
	const hasFiles = fileCount > 0;
	const renderImagePreview = fileCount === 1 && isImgFile(selectedFiles[0].type);
	const renderFileList = !renderImagePreview && hasFiles;

	return (
		<GlobalProvider
			theme={theme}
			gradientBg={gradientBg}
			upload={upload}
		>
			<StyledReactUploadForm
				theme={theme}
				rounded={rounded}
				gradientBg={gradientBg}
				style={style}
				hasFiles={hasFiles}
			>
				{(!hasFiles || renderImagePreview) && (
					/* @ts-ignore */
					<StyledBorderContainer
						{...getRootProps()}
						{...rest}
						theme={theme}
						style={placeholderStyle}
						isDragActive={isDragActive}
						isDragAccept={isDragAccept}
						isDragReject={isDragReject}
					>
						{!renderImagePreview && (
							<input {...getInputProps()} />
						)}

						{renderImagePreview
							? <ImagePreview selectedFile={selectedFiles[0] as IModifiedFile} />
							: (
								<Icon width={iconSize} height={iconSize}>
									<UploadIcon />
								</Icon>
							)
						}

						{!renderImagePreview && (
							<>
								<b css={[gradientText && StyledTextGradient]}>
									{isDragActive
										? (isDragReject ? 'File type not accepted!' : 'Drop the files here...')
										: text
									}
								</b>
								{secondaryText && <small style={{ marginTop: '10px' }} css={[gradientText && StyledTextGradient]}>{secondaryText}</small>}
								<Ink />
							</>
						)}
					</StyledBorderContainer>
				)}

				<ProgressContainer />

				{
					renderFileList && (
						<FilePreview
							theme={theme}
							selectedFiles={selectedFiles}
							rejectedFiles={rejectedFiles}
							onDrop={handleDrop}
							setSelectedFiles={setSelectedFiles}
						/>
					)}

				{hasFiles && (
					<div style={{ marginTop: '15px' }}>
						<Actions
							selectedFiles={selectedFiles}
							setSelectedFiles={setSelectedFiles}
						/>
					</div>
				)}
			</StyledReactUploadForm>
		</GlobalProvider >
	)
};