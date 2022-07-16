import React from "react"
import styled, { createGlobalStyle } from "styled-components";
import ImgErradicacao from "../assets/img-erradicacao.png";


const BoxMainErradicacao = styled.section`
width: 100%;
height:85vh;
border: solid;
border-radius: 0.25em;
background: #E5243B;
border: none;
display: flex;
align-items: center;
justify-content: space-around;
`;

const ImageErradicacao = styled.img`
width: 50%;
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const ContainerInformacoes = styled.div`
display: flex;
flex-direction: column;
`
const PText = styled.p`
color: white;
`
const PNumberOne = styled.p`
color: white;
font-weight: 300;
font-size: 6em;
font-family: 96px "Roboto", sans-serif;
line-height: 1;
`
const H1Erradicacao = styled.h1`
color: white;
font-family: "Roboto", sans-serif;
font-size: 2em;
`
const ParagrafoText = styled.p`
color: white;
font-size: 1rem;
line-height: 1.5rem;
`

const BoxObjetivos = styled.div`
padding: 4vh;
width: 60%;
display: flex;
align-items: center;
flex-direction: column;
margin-left: 8vw;
`
const TextH2 = styled.h2`
padding: 2vh;
font-size: 1.20em;
`
const P = styled.p`
padding: 2vh;
font-size: 18px;
`

export default function Erradicacao(){
    return(
        <div>
        <BoxMainErradicacao>
            <Div>
            <ContainerInformacoes>
            <PText>Objetivos De Desenvolvimento Sustentável</PText>
            <PNumberOne>1</PNumberOne>
            <H1Erradicacao>Erradicação Da Pobreza</H1Erradicacao>
            <ParagrafoText>Erradicar a pobreza em todas as formas e em todos os lugares</ParagrafoText>
            </ContainerInformacoes>
            
                <ImageErradicacao src={ImgErradicacao} alt="Erradicação da pobreza"/>
            
            </Div>
        </BoxMainErradicacao>
        <BoxObjetivos>
        <TextH2>Objetivo 1. Acabar com a pobreza em todas as suas formas, em todos os lugares</TextH2>
            <P><strong>1.1&nbsp;</strong> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de 1 salário minimo</P>
            <P><strong>1.2&nbsp;</strong> Até 2030, reduzir pelo menos à metade a proporção de homens, mulheres e crianças, de todas as idades, que vivem na pobreza, em todas as suas dimensões, de acordo com as definições nacionais</P>
            <P><strong>1.3&nbsp;</strong> Implementar, em nível nacional, medidas e sistemas de proteção social adequados, para todos, incluindo pisos, e até 2030 atingir a cobertura substancial dos pobres e vulneráveis</P>
            <P><strong>1.4&nbsp;</strong> Até 2030, garantir que todos os homens e mulheres, particularmente os pobres e vulneráveis, tenham direitos iguais aos recursos econômicos, bem como o acesso a serviços básicos, propriedade e controle sobre a terra e outras formas de propriedade, herança, recursos naturais, novas tecnologias apropriadas e serviços financeiros, incluindo microfinanças</P>
            <P><strong>1.5&nbsp;</strong> Até 2030, construir a resiliência dos pobres e daqueles em situação de vulnerabilidade, e reduzir a exposição e vulnerabilidade destes a eventos extremos relacionados com o clima e outros choques e desastres econômicos, sociais e ambientais</P>
            <P><strong>1.a&nbsp;</strong> Garantir uma mobilização significativa de recursos a partir de uma variedade de fontes, inclusive por meio do reforço da cooperação para o desenvolvimento, para proporcionar meios adequados e previsíveis para que os países em desenvolvimento, em particular os países menos desenvolvidos, implementem programas e políticas para acabar com a pobreza em todas as suas dimensões</P>
            <P><strong>1.b&nbsp;</strong> Criar marcos políticos sólidos em níveis nacional, regional e internacional, com base em estratégias de desenvolvimento a favor dos pobres e sensíveis a gênero, para apoiar investimentos acelerados nas ações de erradicação da pobreza</P>
            </BoxObjetivos>
        </div>
    )
}