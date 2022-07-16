import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled.section`
width: 26vh;
height:27vh;
border: solid;
border-radius: 0.25em;
background: #26BDE2;
border: none;
box-shadow: 0px 1px 7px black;
`;

export default function CardSix({ children }) {
  return <Container>{children}</Container>;
}