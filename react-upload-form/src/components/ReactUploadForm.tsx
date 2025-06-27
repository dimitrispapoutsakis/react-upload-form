import { IReactUploadForm } from "@typings";
import UploadIcon from "./Icons/UploadIcon";
import Icon from "./Icon";
import { defaultIconSize } from "constants/generic";

export const ReactUploadForm = (props: IReactUploadForm) => {
	const { iconSize = defaultIconSize } = props;

	return (
		<div>
			<Icon> <UploadIcon width={iconSize} height={iconSize} /> </Icon>
		</div>
	)
};