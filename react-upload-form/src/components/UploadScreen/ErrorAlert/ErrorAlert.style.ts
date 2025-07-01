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
  animation: slideInUp 0.25s ease;
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 35%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;