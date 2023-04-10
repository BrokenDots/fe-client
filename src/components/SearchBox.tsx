import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border: #9e9ea1 solid 2px;
  width: 60%;
  gap: 0.8rem;
`;

const IconContainer = styled.div`
  border: none;
  outline: none;
  color: #9e9ea1;
`;

const Search = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
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
    <SearchWrapper>
      <IconContainer>
        <i className="fa fa-search"></i>
      </IconContainer>
      <Search
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        name="search"
        value={value}
        onChange={onChange}
      ></Search>
    </SearchWrapper>
  );
}
