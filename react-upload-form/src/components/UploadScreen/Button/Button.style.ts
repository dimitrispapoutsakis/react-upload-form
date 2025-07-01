import styled from "@emotion/styled";
import { ELayoutLevel } from "@typings";

export const Button = styled.button`
  background-image: linear-gradient(to right, #6a5acd, #ff6347);
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  z-index: ${ELayoutLevel.high};
  position: absolute;
  top: calc(50% + 45px);
  left: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transform: translate(-50%, -0%);
`;