import { IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { defaultIconSize } from "constants/generic";
import { StyledReactUploadForm, StyledTextGradient, StyledBorderContainer } from "./ReactUploadForm.style";
import Ink from 'react-ink'
import { useDropzone } from 'react-dropzone';

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
		accept,
		maxSize,
		minSize,
		maxFiles,
		multiple = true,
		disabled = false,
	} = props;

	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
		onDrop,
		onDropAccepted,
		onDropRejected,
		accept,
		maxSize,
		minSize,
		maxFiles,
		multiple,
		disabled,
	});

	return (
		<StyledReactUploadForm
			theme={theme}
			rounded={rounded}
			gradientBg={gradientBg}
			style={style}
		>
			<StyledBorderContainer 
				{...getRootProps()}
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
		</StyledReactUploadForm>
	)
};