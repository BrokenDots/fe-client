import styled from "styled-components";

interface IButtonProps {
  disabled?: boolean;
  icon: "add" | "filter" | "export";
  text: string;
}

enum iconTypes {
  add = "fas fa-plus",
  filter = "fas fa-filter",
  export = "fas fa-cloud-upload-alt",
}

const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? "#ffffff" : "#0099ff")};
  border: ${(props) => (props.disabled ? "#9E9EA1 solid 2px" : "none")};
  color: ${(props) => (props.disabled ? "#9E9EA1" : "white")};
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  gap: 0.5rem;
`;

export default function Button({ disabled = false, icon, text }: IButtonProps) {
  return (
    <StyledButton disabled={disabled}>
      <i className={iconTypes[icon]}></i>
      {text}
    </StyledButton>
  );
}
