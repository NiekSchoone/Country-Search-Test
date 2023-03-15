import React from "react";
import { StyledHeader } from "./header.styles";

type HeaderProps = {
  text: string;
};

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return <StyledHeader>{props.text}</StyledHeader>;
};
