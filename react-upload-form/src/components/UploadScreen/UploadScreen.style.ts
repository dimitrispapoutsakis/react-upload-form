import { darkBunker } from "@constants/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ELayoutLevel } from "@typings";

export const StyledUploadScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${darkBunker};
  opacity: 0.75;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${ELayoutLevel.high};
`;

export const StyledLoadingText = styled.b`
  z-index: ${ELayoutLevel.high};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledAlert = styled.div`
  z-index: ${ELayoutLevel.max};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;