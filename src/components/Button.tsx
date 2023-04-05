import styled from "styled-components";

interface IButtonProps {
  disabled?: boolean;
  icon?: string;
  text: string;
}

const StyledButton = styled.button`
  background-color: #0099ff;
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
`;

export default function Button({ disabled, icon, text }: IButtonProps) {
  return <StyledButton>{text}</StyledButton>;
}
