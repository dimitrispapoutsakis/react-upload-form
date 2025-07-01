import { ActionsStyle } from "./Actions.style";
import UploadAction from "./UploadAction";
import DiscardAction from "./DiscardAction";
import BlurInAnimation from "@components/Animations/BlurInAnimation";

const Actions = () => (
  <BlurInAnimation>
    <div css={ActionsStyle}>
      <UploadAction />
      <DiscardAction />
    </div>
  </BlurInAnimation>
);

export default Actions;