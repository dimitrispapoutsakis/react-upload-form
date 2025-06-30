import { borderRadiusSecondary, redBright, redMonaLisa } from "@constants/theme";
import styled from "@emotion/styled";
import { ELayoutLevel } from "@typings";

export const StyledErrorAlert = styled.div<{ rounded: boolean }>`
  z-index: ${ELayoutLevel.max};
  position: absolute;
  bottom: 0;
  border-radius: ${({ rounded }) => rounded ? borderRadiusSecondary : '0px'};
  background-color: ${redBright};
  color: ${redMonaLisa};
  font-size: .8rem;
  padding: 12px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`;