import React from "react";
import { BackButtonWrapper } from "./country-detail-header.styles";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../atoms/header/header";
import { Button } from "../../atoms/button/button";
import { HeaderContainer } from "../../layout";
import { Navigate, useNavigate } from "react-router-dom";

type HeaderProps = {
  header: string;
  countryLink: string;
};

export const CountryDetailHeader: React.FC<HeaderProps> = (
  props: HeaderProps
) => {
  const navigation = useNavigate();

  const copyCountryLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let href = e.currentTarget.getAttribute("href");
    if (href) {
      navigator.clipboard.writeText(href);
    }
  };

  return (
    <HeaderContainer>
      <BackButtonWrapper>
        <Button
          text=""
          type="icon"
          onclick={() => navigation("/")}
          icon={faChevronLeft}
          margin="0 "
        />
        <Header text={props.header} />
      </BackButtonWrapper>
      <a href={props.countryLink} onClick={copyCountryLink}>
        Copy country link
      </a>
    </HeaderContainer>
  );
};
