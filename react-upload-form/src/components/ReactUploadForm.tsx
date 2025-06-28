import { IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { defaultIconSize } from "constants/generic";
import { StyledReactUploadForm, StyledTextGradient, StyledBorderContainer } from "./ReactUploadForm.style";
import Ink from 'react-ink'
import { useDropzone } from 'react-dropzone';
import { useState, useCallback } from 'react';
import { isLightTheme } from "@utils/theme.util";

export const ReactUploadForm = (props: IReactUploadForm) => {
	const {
		iconSize = defaultIconSize,
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
		showSelectedFiles = true,
		...rest
	} = props;

	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [rejectedFiles, setRejectedFiles] = useState<any[]>([]);

	const handleDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[], event: any) => {
		setSelectedFiles(acceptedFiles);
		setRejectedFiles(rejectedFiles);
		
		// Call the parent's onDrop if provided
		if (onDrop) {
			onDrop(acceptedFiles, rejectedFiles, event);
		}
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

	const removeFile = useCallback((index: number) => {
		const newFiles = selectedFiles.filter((_, i) => i !== index);
		setSelectedFiles(newFiles);
		
		if (onDrop) {
			onDrop(newFiles, rejectedFiles, {} as any);
		}
	}, [selectedFiles, rejectedFiles, onDrop]);

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

	const formatFileSize = (bytes: number): string => {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	};

	return (
		<StyledReactUploadForm
			theme={theme}
			rounded={rounded}
			gradientBg={gradientBg}
			style={style}
		>
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
				<Icon>
					<UploadIcon width={iconSize} height={iconSize} />
				</Icon>
				<b css={[gradientText && StyledTextGradient]}>
					{isDragActive 
						? (isDragReject ? 'File type not accepted!' : 'Drop the files here...')
						: text
					}
				</b>
				{ secondaryText && <small style={{marginTop: '10px'}} css={[gradientText && StyledTextGradient]}>{secondaryText}</small> }
				<Ink />
			</StyledBorderContainer>

			{/* Selected Files Display */}
			{showSelectedFiles && selectedFiles.length > 0 && (
				<div style={{ 
					marginTop: '15px', 
					width: '100%',
					maxHeight: '200px',
					overflowY: 'auto'
				}}>
					<h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: isLightTheme(theme) ? '#333' : '#fff' }}>
						Selected Files ({selectedFiles.length}):
					</h4>
					{selectedFiles.map((file, index) => (
						<div key={index} style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '8px 12px',
							margin: '4px 0',
							background: isLightTheme(theme) ? '#f5f5f5' : '#2a2a2a',
							borderRadius: '6px',
							fontSize: '12px'
						}}>
							<div style={{ flex: 1, marginRight: '10px' }}>
								<div style={{ fontWeight: 'bold', color: isLightTheme(theme) ? '#333' : '#fff' }}>
									{file.name}
								</div>
								<div style={{ color: isLightTheme(theme) ? '#666' : '#ccc', fontSize: '11px' }}>
									{formatFileSize(file.size)}
								</div>
							</div>
							<button
								onClick={() => removeFile(index)}
								style={{
									background: '#ff4444',
									color: 'white',
									border: 'none',
									borderRadius: '4px',
									padding: '4px 8px',
									cursor: 'pointer',
									fontSize: '11px'
								}}
							>
								Remove
							</button>
						</div>
					))}
				</div>
			)}

			{rejectedFiles.length > 0 && (
				<div style={{ 
					marginTop: '10px', 
					width: '100%'
				}}>
					<h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#ff4444' }}>
						Rejected Files ({rejectedFiles.length}):
					</h4>
					{rejectedFiles.map((rejection, index) => (
						<div key={index} style={{
							padding: '8px 12px',
							margin: '4px 0',
							background: 'rgba(255, 68, 68, 0.1)',
							border: '1px solid #ff4444',
							borderRadius: '6px',
							fontSize: '12px',
							color: '#ff4444'
						}}>
							<div style={{ fontWeight: 'bold' }}>
								{rejection.file.name}
							</div>
							<div style={{ fontSize: '11px', marginTop: '2px' }}>
								{rejection.errors.map((error: any, errorIndex: number) => (
									<div key={errorIndex}>• {error.message}</div>
								))}
							</div>
						</div>
					))}
				</div>
			)}
		</StyledReactUploadForm>
	)
};