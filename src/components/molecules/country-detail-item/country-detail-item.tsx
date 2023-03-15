import React from "react";
import { Container } from "../../atoms/container/container";
import { Flag } from "../../atoms/flag/flag";
import {
  CountryDetailWrapper,
  TextContainer,
} from "./country-detail-item.styles";

type CountryDetailItemProps = {
  flag: string;
  region: string;
  capital: string;
  population: number;
};

export const CountryDetailItem: React.FC<CountryDetailItemProps> = (
  props: CountryDetailItemProps
) => {
  return (
    <Container borders={true}>
      <CountryDetailWrapper>
        <Flag imageURL={props.flag} size="large" />
        <TextContainer>
          <span>Capital: {props.capital}</span>
          <span>Region: {props.region}</span>
          <span>Population: {props.population} inhabitants</span>
        </TextContainer>
      </CountryDetailWrapper>
    </Container>
  );
};
