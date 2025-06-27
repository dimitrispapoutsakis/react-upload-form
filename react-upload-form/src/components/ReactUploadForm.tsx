import { IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { defaultIconSize } from "constants/generic";
import { StyledReactUploadForm, StyledTextGradient, StyledBorderContainer } from "./ReactUploadForm.style";

export const ReactUploadForm = (props: IReactUploadForm) => {
	const {
		iconSize = defaultIconSize,
		theme = 'light',
		rounded = true,
		gradientBg = true,
		gradientText = true,
		text = 'Choose file / Drag & drop'
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
			</StyledBorderContainer>
		</StyledReactUploadForm>
	)
};