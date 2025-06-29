import { darkBunker } from "@constants/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
  z-index: 100;
`;

export const StyledLoadingText = styled.b`
  z-index: 101;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
`;