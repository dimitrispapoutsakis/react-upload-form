import { TTheme } from "@typings";
import { ActionsStyle, StyledAction, StyledBorder } from "./Actions.style";
import Icon from "@components/Icon";
import CheckIcon from "@components/Icons/CheckIcon";
import TrashIcon from "@components/Icons/TrashIcon";
import { useState } from "react";
import Ink from "react-ink";
import { useGlobal } from "@components/GlobalProvider";
import UploadAction from "./UploadAction";
import DiscardAction from "./DiscardAction";

const Actions = () => (
  <div css={ActionsStyle}>
    <UploadAction />
    <DiscardAction />
  </div>
);

export default Actions;