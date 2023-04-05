import styled from "styled-components";

const Search = styled.input`
  width: 65%;
  padding: 0.8rem;
  border: #9e9ea1 solid 2px;
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
