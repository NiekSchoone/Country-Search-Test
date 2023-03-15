import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { StyledButton } from "./button.styles";

type ButtonProps = {
  text: string;
  margin?: string;
  icon?: IconProp;
  type: "bordered" | "text" | "icon";
  onclick: () => void;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton
      margin={props.margin}
      buttonType={props.type}
      onClick={props.onclick}
    >
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ""}
      {props.text}
    </StyledButton>
  );
};
