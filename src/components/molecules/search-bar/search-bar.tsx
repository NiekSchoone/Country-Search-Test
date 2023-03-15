import React from "react";
import { Button } from "../../atoms/button/button";
import { HeaderContainer } from "../../layout";
import { SearchInput } from "./search-bar.styles";

type SearchBarProps = {
  onSearch: (term: string) => void;
  searchValue: string;
};

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [searchInput, setSearchInput] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
    props.onSearch(e.target.value);
  };

  React.useEffect(() => {
    setSearchInput(props.searchValue);
  }, [props.searchValue]);

  return (
    <HeaderContainer>
      <SearchInput
        type="text"
        placeholder="Search countries by name or region"
        onChange={handleChange}
        value={searchInput}
      />
      <Button text="Search" type="text" onclick={() => {}} />
    </HeaderContainer>
  );
};
