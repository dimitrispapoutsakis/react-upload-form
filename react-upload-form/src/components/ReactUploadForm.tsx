import { IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { defaultIconSize } from "constants/generic";
import StyledReactUploadForm from "./ReactUploadForm.style";

export const ReactUploadForm = (props: IReactUploadForm) => {
	const { 
		iconSize = defaultIconSize, 
		theme = 'light', 
		rounded = true, 
		gradientBg = true
	} = props;

	return (
		<StyledReactUploadForm
			theme={theme}
			rounded={rounded}
			gradientBg={gradientBg}
		>
			<Icon> <UploadIcon width={iconSize} height={iconSize} /> </Icon>
		</StyledReactUploadForm>
	)
};