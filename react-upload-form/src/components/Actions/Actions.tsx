import { ISelectedFiles } from "@typings";
import { ActionsStyle } from "./Actions.style";
import UploadAction from "./UploadAction";
import DiscardAction from "./DiscardAction";

const Actions = ({ selectedFiles, setSelectedFiles }: ISelectedFiles) => (
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
);

export default Actions;