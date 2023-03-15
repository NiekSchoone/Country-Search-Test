import React from "react";
import axios, { AxiosResponse } from "axios";
import { useLoaderData } from "react-router-dom";
import { CountryDetailItem } from "../../components/molecules/country-detail-item/country-detail-item";
import { CountryDetailHeader } from "../../components/organisms/country-detail-header/country-detail-header";
import { CountryList } from "../../components/organisms/country-list/country-list";
import { Country } from "../../types/country";
import { Layout } from "../../components/layout";
import { getCountryByCCA3 } from "../../services/countries";

export const CountryDetail: React.FC = () => {
  const [country, setCountry] = React.useState<Country>();
  const [borderCountries, setBorderCountries] = React.useState<Country[]>([]);

  const loaderData: { data: Array<Country> } = useLoaderData() as {
    data: Array<Country>;
  };

  React.useEffect(() => {
    setCountry(loaderData.data[0]);
  }, []);

  React.useEffect(() => {
    getNeighbours();
  }, [country]);

  const getNeighbours = () => {
    if (country && country.borders) {
      let promises: Array<Promise<AxiosResponse>> = [];
      country.borders.forEach((item: string) => {
        promises.push(getCountryByCCA3(item));
      });
      axios.all(promises).then((responses: Array<{ data: Array<Country> }>) => {
        let neighbours: Array<Country> = [];
        responses.forEach((item: { data: Array<Country> }) => {
          neighbours.push(item.data[0]);
        });
        setBorderCountries(neighbours);
      });
    }
  };

  return (
    <Layout>
      <CountryDetailHeader
        header={country ? country.name.common : ""}
        countryLink={country ? country.maps.googleMaps : ""}
      />
      <CountryDetailItem
        capital={country ? country.capital[0] : ""}
        region={country ? country.region : ""}
        flag={country ? country.flags.png : ""}
        population={country ? country.population : 0}
      />
      <CountryList header="Border countries" countries={borderCountries} />
    </Layout>
  );
};
