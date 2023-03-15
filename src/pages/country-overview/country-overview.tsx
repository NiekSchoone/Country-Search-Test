import React from "react";
import { Country } from "../../types/country";
import { SearchBar } from "../../components/molecules/search-bar/search-bar";
import { PopularSearches } from "../../components/organisms/popular-searches/popular-searches";
import { CountryList } from "../../components/organisms/country-list/country-list";
import { Layout } from "../../components/layout";
import { useLoaderData } from "react-router-dom";

export const CountryOverview: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = React.useState<Country[]>(
    []
  );

  const [popularSearch, setPopularSearch] = React.useState<string>("");

  const loaderData: { data: Array<Country> } = useLoaderData() as {
    data: Array<Country>;
  };

  React.useEffect(() => {
    setCountries(loaderData.data);
  }, [loaderData]);

  React.useEffect(() => {
    filterCountries("");
  }, [countries]);

  const filterCountries = (term: string) => {
    const newData = countries.filter((item: Country) => {
      if (item.name.official.toLowerCase().includes(term.toLowerCase())) {
        return item;
      }
      if (item.region.toLowerCase().includes(term.toLowerCase())) {
        return item;
      }
    });

    setFilteredCountries(newData.slice(0, 10));
  };

  const setSearchCallback = (term: string) => {
    setPopularSearch(term);
    filterCountries(term);
  };

  return (
    <Layout>
      <SearchBar onSearch={filterCountries} searchValue={popularSearch} />
      <PopularSearches onClick={setSearchCallback} />
      <CountryList header="Top Results" countries={filteredCountries} />
    </Layout>
  );
};
