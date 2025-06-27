import { IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { defaultIconSize } from "constants/generic";
import { StyledReactUploadForm, StyledTextGradient, StyledBorderContainer } from "./ReactUploadForm.style";
import Ink from 'react-ink'

export const ReactUploadForm = (props: IReactUploadForm) => {
	const {
		iconSize = defaultIconSize,
		theme = 'light',
		rounded = true,
		gradientBg = true,
		gradientText = true,
		text = 'Choose file / Drag & drop',
		secondaryText = '',
	} = props;

	return (
		<StyledReactUploadForm
			theme={theme}
			rounded={rounded}
			gradientBg={gradientBg}
		>
			<StyledBorderContainer theme={theme}>
				<Icon>
					<UploadIcon width={iconSize} height={iconSize} />
				</Icon>
				<b css={[gradientText && StyledTextGradient]}>{text}</b>
				{ secondaryText && <small style={{marginTop: '10px'}} css={[gradientText && StyledTextGradient]}>{secondaryText}</small> }
				<Ink />
			</StyledBorderContainer>
		</StyledReactUploadForm>
	)
};