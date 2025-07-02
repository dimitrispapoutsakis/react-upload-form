import UploadAction from "./UploadAction";
import DiscardAction from "./DiscardAction";
import SlideInUpAnimation from "@components/Animations/SlideInUpAnimation";

const Actions = () => (
  <SlideInUpAnimation style={{ display: 'flex', marginTop: '25px' }}>
    <UploadAction />
    <DiscardAction />
  </SlideInUpAnimation>
);

export default Actions;