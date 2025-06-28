import { ISelectedFiles } from "@typings";
import { ActionsStyle } from "./Actions.style";
import UploadAction from "./UploadAction";
import DiscardAction from "./DiscardAction";
import BlurInAnimation from "@components/Animations/BlurInAnimation";

const Actions = ({ selectedFiles, setSelectedFiles }: ISelectedFiles) => (
  <BlurInAnimation>
  <div css={ActionsStyle}>
    <UploadAction
      selectedFiles={selectedFiles}
      setSelectedFiles={setSelectedFiles}
    />

    <DiscardAction
      selectedFiles={selectedFiles}
      setSelectedFiles={setSelectedFiles}
    />
  </div>
  </BlurInAnimation>
);

export default Actions;