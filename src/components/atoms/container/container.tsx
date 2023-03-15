import React from "react";
import { StyledContainer } from "./container.styles";

type ContainerProps = {
  borders: boolean;
  padding?: string;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <StyledContainer padding={props.padding} borders={props.borders}>
      {props.children}
    </StyledContainer>
  );
};
