import React from "react";
import { Button } from "../../atoms/button/button";
import { Container } from "../../atoms/container/container";
import { Header } from "../../atoms/header/header";
import { ButtonsContainer } from "./popular-searches.styles";

type PopularSearchesProps = {
  onClick: (term: string) => void;
};

export const PopularSearches: React.FC<PopularSearchesProps> = (
  props: PopularSearchesProps
) => {
  let popularSearches = [
    "United States",
    "Tunisia",
    "Spain",
    "Japan",
    "Europe",
    "America",
    "Africa",
    "Asia",
  ];

  return (
    <Container borders={true}>
      <Header text="Popular Searches" />
      <ButtonsContainer>
        {popularSearches.map((item, index) => (
          <Button
            margin="15px 15px 0 0"
            key={index}
            text={item}
            type="bordered"
            onclick={() => {
              props.onClick(item);
            }}
          />
        ))}
      </ButtonsContainer>
    </Container>
  );
};
