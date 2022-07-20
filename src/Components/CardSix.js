import React from "react";
import styled from "styled-components";

const Container = styled.section`
width: 26vh;
height:27vh;
border: solid;
border-radius: 0.25em;
background: #26BDE2;
border: none;
box-shadow: 0px 1px 7px black;
transition: all 0.4s;
  cursor: pointer;

  
  &:hover{
    -webkit-transform: scale(1.5);
    transform: scale(1.2);
  }
`;

export default function CardSix({ children }) {
  return <Container>{children}</Container>;
}