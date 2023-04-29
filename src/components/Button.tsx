import styled from "styled-components";

interface IButtonProps {
  disabled?: boolean;
  icon: "add" | "filter" | "export";
  text: string;
  onClick?: any;
}

enum iconTypes {
  add = "fas fa-plus",
  filter = "fas fa-filter",
  export = "fas fa-cloud-upload-alt",
}

const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${(props) =>
    props.disabled ? "var(--background-color)" : "var(--accent-color)"};
  border: none;
  color: ${(props) => (props.disabled ? "#9E9EA1" : "white")};
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--body-font);
  font-weight: 700;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  gap: 0.5rem;
  border-radius: 0.5rem;
`;

export default function Button({
  disabled = false,
  icon,
  text,
  onClick,
}: IButtonProps) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      <i className={iconTypes[icon]}></i>
      {text}
    </StyledButton>
  );
}
