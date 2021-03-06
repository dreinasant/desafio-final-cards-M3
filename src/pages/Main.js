import React from "react"
import styled, { createGlobalStyle } from "styled-components";
import ImgErradicacao from "../assets/img-erradicacao.png"
import Card from "../Components/Card";
import CardTwo from "../Components/CardTwo";
import CardThree from "../Components/CardThree";
import CardFour from "../Components/CardFour";
import CardFive from "../Components/CardFive";
import CardSix from "../Components/CardSix";

import ImgFomeZero from "../assets/fome-zero.png";
import ImgSaude from "../assets/saude-bem-estar.png";
import ImgEducacao from "../assets/educacao.png";
import ImgIgualdade from "../assets/igualdade-genero.png";
import ImgSaneamento from "../assets/saneamento.png";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration: none;
    
  }
`

const H2 = styled.h2`
color: black;
height: 18vh;
width: 90%;
font-family: Roboto, sans-serif;
font-size: 2em;
margin: auto;

@media(max-width: 730px){
  font-size: 1.1em;
  height: 18vh;
}

`;
const ParagrafoText = styled.p`
color: black;
height: 15vh;
width: 90%;
font-family: Roboto, sans-serif;
font-size: 1em;
margin: auto;

@media(max-width: 770px){
  font-size: 0.8em;
  margin-bottom: 40px;
}
`

const BoxCards = styled.main`
height: 40vh;
width: 100%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;

@media(max-width: 805px){
width: 100%;
height: 110vh;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;

  }
`

const Contain = styled.div`
display: flex;
flex-direction: column;

`
const ContainerErradicacao = styled.div`
display: flex;
margin-top: 1vh;
`
const BoxImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ImageErradicacao = styled.img`
width: 8vw;
margin-top: 3vh;
cursor: pointer;

@media(max-width: 655px){
  width: 85px;
}
`
const A = styled.a`
 list-style: none;
`;

const ParagrafoNumber = styled.p`
font-family: 'Work Sans', sans-serif;
font-size: 2.3em;
color: white;
font-weight: bolder;
margin-left: 1vw;
`

const PCardOne = styled.p`
color: white;
font-family: 'Work Sans', sans-serif;
font-size: 0.75em;
font-weight: bolder;
display: flex;
align-items: center;
justify-content: center;
margin-left: 1vh;
width: 60%;
`;



const ContainCardTwo = styled.div`
display: flex;
flex-direction: column;

`
const ContainerFomeZero = styled.div`
display: flex;
margin-top: 1vh;

`
const ParagrafoNumberTwo = styled.p`
font-family: 'Work Sans', sans-serif;
font-size: 2.5em;
color: white;
font-weight: bolder;
margin-bottom: 2.5vh;
height: 7vh;
margin-left: 1vw;
`

const PCardTwo = styled.p`
color: white;
font-family:  sans-serif;
font-size: 0.75em;
font-weight: bolder;
margin-left: 1vh;
display: flex;
align-items: center;
justify-content: center;
`;

const ImageFomeZero = styled.img`
width: 6vw;
margin-top: 1vh;
cursor: pointer;

@media(max-width: 655px){
  width: 65px;
}
`


const ContainCardThree = styled.div`
display: flex;
flex-direction: column;

`
const ContainerBemEstar = styled.div`
display: flex;
margin-top: 1vh;
`
const ParagrafoNumberThree = styled.p`
font-family: 'Work Sans', sans-serif;
font-size: 2.3em;
color: white;
font-weight: bolder;
margin-left: 1vw;
`

const PCardThree = styled.p`
color: white;
font-family: 'Work Sans', sans-serif;
font-size: 0.75em;
font-weight: bolder;
display: flex;
align-items: center;
justify-content: center;
margin-left: 1vh;

`;

const ImageBemEstar = styled.img`
width: 7vw;
margin-top: 2vh;
cursor: pointer;

@media(max-width: 655px){
  width: 80px;
}
`



const ContainCardFour = styled.div`
display: flex;
flex-direction: column;

`
const ContainerEducacao = styled.div`
display: flex;
margin-top: 1vh;
`
const ImageEducacao = styled.img`
width: 7vw;
margin-top: 1vh;
cursor: pointer;

@media(max-width: 655px){
  width: 80px;
}
`
const ParagrafoNumberFour = styled.p`
font-family: 'Work Sans', sans-serif;
font-size: 2.3em;
color: white;
font-weight: bolder;
margin-left: 1vw;
`
const PCardFour = styled.p`
color: white;
font-family: 'Work Sans', sans-serif;
font-size: 0.75em;
font-weight: bolder;
display: flex;
align-items: center;
justify-content: center;
margin-left: 1vh;

`;




const ContainCardFive = styled.div`
display: flex;
flex-direction: column;

`
const ContainerIgualdade = styled.div`
display: flex;
margin-top: 1vh;
`
const ImageIgualdade = styled.img`
width: 7vw;
margin-top: 1vh;
cursor: pointer;
margin-right: 4vh;

@media(max-width: 655px){
  width: 64px;
}
`
const ParagrafoNumberFive = styled.p`
font-family: 'Work Sans', sans-serif;
font-size: 2.3em;
color: white;
font-weight: bolder;
margin-left: 1vw;
`
const PCardFive = styled.p`
color: white;
font-family: 'Work Sans', sans-serif;
font-size: 0.75em;
font-weight: bolder;
display: flex;
align-items: center;
justify-content: center;
margin-left: 1vh;

`;


const ContainCardSix = styled.div`
display: flex;
flex-direction: column;

`
const ContainerSaneamento = styled.div`
display: flex;
margin-top: 1vh;
`
const ImageSaneamento = styled.img`
width: 7vw;
margin-top: 1vh;
cursor: pointer;
margin-right: 4vh;

@media(max-width: 655px){
  width: 65px;
}
`
const ParagrafoNumberSix = styled.p`
font-family: 'Work Sans', sans-serif;
font-size: 2.3em;
color: white;
font-weight: bolder;
margin-left: 1vw;
`
const PCardSix = styled.p`
color: white;
font-family: 'Work Sans', sans-serif;
font-size: 0.75em;
font-weight: bolder;
display: flex;
align-items: center;
justify-content: center;
margin-left: 1vh;
`;


export default function Heaader(){
    return(
        <div>
            <H2>Os Objetivos de Desenvolvimento Sustent??vel em Itatiaia, <br/>municipio de S??o Jos?? do Jacuipe BA.</H2>
            <ParagrafoText>Os Objetivos de Desenvolvimento Sustent??vel s??o um apelo ?? a????o para acabar com a pobreza, <br/> proteger o meio ambiente e o clima e garantir que as pessoas, em Itatiaia, possam desfrutar de paz <br/> e de prosperidade. Estes s??o os objetivos para os quais as Na????es Unidas est??o contribuindo a fim de que <br/> possamos atingir a Agenda 2030 no Brasil.</ParagrafoText>
        <BoxCards>  
      <GlobalStyle />
      
      <A href="http://localhost:3000/erradicacao-da-pobreza"><Card>
        <Contain>
            <ContainerErradicacao>
      <ParagrafoNumber>1</ParagrafoNumber>
        <PCardOne>ERRADICA????O DA POBREZA</PCardOne>
        </ContainerErradicacao>
        <BoxImage>
        <ImageErradicacao src={ImgErradicacao} alt="Erradica????o da Pobreza"/>
        </BoxImage>
        </Contain>
      </Card></A>
    

      <A href="http://localhost:3000/fome-zero-e-agricultura-sustentavel"><CardTwo>
      <ContainCardTwo>
            <ContainerFomeZero>
            <ParagrafoNumberTwo>2</ParagrafoNumberTwo>
            <PCardTwo>FOME ZERO <br/> E AGRICULTURA SUSTENT??VEL</PCardTwo>
            </ContainerFomeZero>
        <BoxImage>
        <ImageFomeZero src={ImgFomeZero} alt="Fome zero e agricultura sustent??vel"/>
        </BoxImage>
        </ContainCardTwo>
        </CardTwo></A>

      
        <A href="http://localhost:3000/saude-e-bem-estar"><CardThree>
        <ContainCardThree>
          <ContainerBemEstar>
      <ParagrafoNumberThree>3</ParagrafoNumberThree>
        <PCardThree>SA??DE E <br/>BEM ESTAR</PCardThree>
        </ContainerBemEstar>
        <BoxImage>
        <ImageBemEstar src={ImgSaude} alt="Sa??de e bem estar"/>
        </BoxImage>
        </ContainCardThree>
      </CardThree></A>

      <A href="http://localhost:3000/educacao-de-qualidade"><CardFour>
        <ContainCardFour>
            <ContainerEducacao>
            <ParagrafoNumberFour>4</ParagrafoNumberFour>
            <PCardFour>EDUCA????O <br/>DE QUALIDADE</PCardFour>
            </ContainerEducacao>
        <BoxImage>
        <ImageEducacao src={ImgEducacao} alt="Educa????o de qualidade"/>
        </BoxImage>
        </ContainCardFour>
      </CardFour></A>

      <A href="http://localhost:3000/igualdade-de-genero"><CardFive>
      <ContainCardFive>
            <ContainerIgualdade>
            <ParagrafoNumberFive>5</ParagrafoNumberFive>
            <PCardFive>IGUALDADE <br/>DE G??NERO</PCardFive>
            </ContainerIgualdade>
        <BoxImage>
        <ImageIgualdade src={ImgIgualdade} alt="Igualdade  de g??nero"/>
        </BoxImage>
        </ContainCardFive>
      </CardFive></A>

      <A href="http://localhost:3000/agua-potavel-e-saneamento"><CardSix>
      <ContainCardSix>
            <ContainerSaneamento>
            <ParagrafoNumberSix>6</ParagrafoNumberSix>
            <PCardSix>??GUA POT??VEL <br/>E SANEAMENTO</PCardSix>
            </ContainerSaneamento>
        <BoxImage>
        <ImageSaneamento src={ImgSaneamento} alt="??GUA POT??VEL E SANEAMENTO"/>
        </BoxImage>
        </ContainCardSix>
      </CardSix></A>
    </BoxCards>
        </div>
        
    )
}