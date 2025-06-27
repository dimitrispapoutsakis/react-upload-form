import { IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { defaultIconSize } from "constants/generic";
import reactUploadFormStyle from "./ReactUploadForm.style";

export const ReactUploadForm = (props: IReactUploadForm) => {
	const { iconSize = defaultIconSize } = props;

	return (
		<div
			// style={{ '--background-color': 'yellow' }}
			css={reactUploadFormStyle}
		>
			<Icon> <UploadIcon width={iconSize} height={iconSize} /> </Icon>
		</div>
	)
};