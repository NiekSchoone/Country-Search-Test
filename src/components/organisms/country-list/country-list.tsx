import React from "react";
import { Country } from "../../../types/country";
import { Container } from "../../atoms/container/container";
import { Header } from "../../atoms/header/header";
import { CountryListItem } from "../../molecules/country-list-item/country-list-item";
import { CountryColumns, NoResults } from "./country-list.styles";

type CountryListProps = {
  header: string;
  countries: Array<Country>;
};

export const CountryList: React.FC<CountryListProps> = (
  props: CountryListProps
) => {
  const renderCountries = () => {
    return props.countries.map((country: Country, index: number) => {
      return (
        <CountryListItem
          key={index}
          nameCommon={country.name.common}
          nameOfficial={country.name.official}
          region={country.region}
          flag={country.flags.png}
          cca3={country.cca3}
        />
      );
    });
  };

  return (
    <Container borders={false}>
      <Header text={props.header} />
      {props.countries.length > 0 ? (
        <CountryColumns>{renderCountries()}</CountryColumns>
      ) : (
        <NoResults>
          <span>None</span>
        </NoResults>
      )}
    </Container>
  );
};
