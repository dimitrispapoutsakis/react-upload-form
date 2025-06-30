import { useGlobal } from "@components/GlobalProvider";
import { StyledErrorAlert } from "./ErrorAlert.style";

const ErrorAlert = ({ text }: { text: string }) => {
  const { rounded } = useGlobal();

  return (
    <StyledErrorAlert rounded={rounded}>
      <b>{text}</b>
    </StyledErrorAlert>
  );
}

export default ErrorAlert;