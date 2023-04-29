import styled from "styled-components";

const Search = styled.input`
  width: 65%;
  padding: 0.8rem;
  background-color: var(--background-color);
  border: var(--background-color) solid 2px;
  color: var(--text-color);
  font-family: var(--body-font);
  font-weight: 700;
  font-size: 1rem;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
  }
`;

interface ISearchBoxProps {
  placeholder: string;
  value: string;
  onChange: (x: any) => void;
}

export default function SearchBox({
  placeholder,
  onChange,
  value,
}: ISearchBoxProps) {
  return (
    <Search
      type="text"
      placeholder={placeholder}
      name="search"
      value={value}
      onChange={onChange}
    ></Search>
  );
}
