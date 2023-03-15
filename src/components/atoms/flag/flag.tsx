import React from "react";
import { LargeFlagImg, SmallFlagImg } from "./flag.styles";

type FlagProps = {
  imageURL: string;
  size: "small" | "large";
};

export const Flag: React.FC<FlagProps> = (props: FlagProps) => {
  return (
    <>
      {props.size === "small" ? (
        <SmallFlagImg src={props.imageURL} />
      ) : (
        <LargeFlagImg src={props.imageURL} />
      )}
    </>
  );
};
