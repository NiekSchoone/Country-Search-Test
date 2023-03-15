import styled from "styled-components";

type ButtonStyleProps = {
  buttonType: string;
  margin?: string;
};

export const StyledButton = styled.button<ButtonStyleProps>`
  padding: ${(props) =>
    props.buttonType === "text"
      ? "0"
      : props.buttonType === "icon"
      ? "0 10px 0 0"
      : "7px 16px"};
  margin: ${(props) => (props.margin ? props.margin : "")};
  ${(props) =>
    props.buttonType === "text"
      ? `
        font-size: 18px; 
        font-weight: bold;`
      : props.buttonType === "icon"
      ? ` 
        font-size: 20px; 
        font-weight: bold;`
      : ""}
  background-color: transparent;
  ${(props) =>
    props.buttonType === "bordered"
      ? ` border-radius: 200px;
          border: 1px solid #dfdfdf`
      : `border: none;`};
  cursor: pointer;
  ${(props) =>
    props.buttonType === "icon"
      ? `
        display: flex;
        align-items: center;
      `
      : ``}
`;
