import styled from "styled-components";

type ContainerStyleProps = {
  borders: boolean;
  padding?: string;
};

export const StyledContainer = styled.div<ContainerStyleProps>`
  padding: ${(props) => (props.padding ? props.padding : "30px")};
  ${(props) =>
    props.borders
      ? `
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
      `
      : ""}
`;
