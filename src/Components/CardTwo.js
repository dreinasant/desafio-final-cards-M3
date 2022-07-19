import React from "react";
import styled from "styled-components";

const Container = styled.section`
width: 26vh;
height:27vh;
border: solid;
border-radius: 0.25em;
background: #DDA63A;
border: none;
box-shadow: 0px 1px 7px black;
`;

export default function CardTwo({ children }) {
  return <Container>{children}</Container>;
}
