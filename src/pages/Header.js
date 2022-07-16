import React from "react"
import styled, { createGlobalStyle } from "styled-components";
import Background from "../assets/background.jpg";
import ImgErradicacao from "../assets/img-erradicacao.png"

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
height: 100vh;
margin: auto;
`

const H1 = styled.h1`
color: white;
height: vh;
width: 40%;
font-family: Roboto, sans-serif;
font-size: 2.80em;
position: absolute;
top: 5vw;
right: 52vw;
`

//  const Img = styled.img`
//  width:100%;  
//  height: 41vw;

// `


export default function Heaader(){
    return(
        <Header>
        
            <GlobalStyle/>
            {/* <Img src={Background} /> */}
            <H1>Sobre o nosso trabalho para alcançar os Objetivos de Desenvolvimento Sustentável em Itatiaia</H1>

        </Header>
    )
}