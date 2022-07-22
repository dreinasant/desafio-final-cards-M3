import React from "react"
import styled, { createGlobalStyle } from "styled-components";
import Background from "../assets/background.jpg";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration: none;
    
  }
`
const Header = styled.header`
background-image: url(${Background});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width:100%;  
height:90vh;
margin: auto;
`

const H1 = styled.h1`
color: white;
width: 40%;
font-family: Roboto, sans-serif;
font-size: 2.40em;
position: absolute;
top: 5vw;
right: 52vw;

text-align:start;
text-transform: uppercase;
letter-spacing: 2px;
text-shadow: 3px 3px #4169E1 ;
transition: text-shadow 0.1s ease;
cursor: pointer;

@media(max-width: 805px){
  font-size: 1em;
  position: absolute;
  top: 20vw;
  right: 25vw;
  width: 70%;
  }
`


export default function Heaader(){
    return(
        <Header>
        
            <GlobalStyle/>
             
            <H1 className="h1-header" >Sobre o nosso trabalho para alcançar os Objetivos de Desenvolvimento Sustentável em Itatiaia</H1>

        </Header>
    )
}