import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Flag } from "../../atoms/flag/flag";
import {
  CountryLinkContainer,
  CountryTag,
  CountryTitle,
  TextContainer,
} from "./country-list-item.styles";

type CountryListItemProps = {
  flag: string;
  nameCommon: string;
  nameOfficial: string;
  region: string;
  cca3: string;
};

export const CountryListItem: React.FC<CountryListItemProps> = (
  props: CountryListItemProps
) => {
  const navigation = useNavigate();

  const navigateToCountry = () => {
    //navigation("/details/" + props.cca3);
    window.location.href = "/details/" + props.cca3;
  };

  return (
    <CountryLinkContainer onClick={navigateToCountry}>
      <Flag imageURL={props.flag} size="small" />
      <TextContainer>
        <CountryTitle>{props.nameCommon}</CountryTitle>
        <CountryTag>Region: {props.region}</CountryTag>
      </TextContainer>
    </CountryLinkContainer>
  );
};
