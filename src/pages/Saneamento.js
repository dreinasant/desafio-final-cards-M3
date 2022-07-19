import React from "react"
import styled from "styled-components";
import ImgSaneamento from "../assets/saneamento.png";


const BoxMainSaneamento = styled.section`
width: 100%;
height:85vh;
border: solid;
border-radius: 0.25em;
background: #26BDE2;
border: none;
display: flex;
align-items: center;
justify-content: space-evenly;
margin: auto;
`;

const ImageSaneamento = styled.img`
width: 30%;
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

const ContainerInformacoes = styled.div`
display: flex;
flex-direction: column;
`
const PText = styled.p`
color: white;
`
const PNumberSix = styled.p`
color: white;
font-weight: 300;
font-size: 6em;
font-family: 96px "Roboto", sans-serif;
line-height: 1;
`
const H1Saneamento = styled.h1`
color: white;
font-family: "Roboto", sans-serif;
font-size: 2em;
width: 35%;
`
const ParagrafoText = styled.p`
color: white;
font-size: 1rem;
line-height: 1.5rem;
width: 60%;
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
        <BoxMainSaneamento>
            <Div>
            <ContainerInformacoes>
            <PText>Objetivos De Desenvolvimento Sustentável</PText>
            <PNumberSix>6</PNumberSix>
            <H1Saneamento>Água potável e <br/>saneamento</H1Saneamento>
            <ParagrafoText>Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos</ParagrafoText>
            </ContainerInformacoes>
            
                <ImageSaneamento src={ImgSaneamento} alt="Água potável e saneamento"/>
            
            </Div>
        </BoxMainSaneamento>
        <BoxObjetivos>
        <TextH2>Objetivo 6. Assegurar a disponibilidade e gestão sustentável da água e saneamento para todas e todos</TextH2>
            <P><strong>6.1&nbsp;</strong> Até 2030, alcançar o acesso universal e equitativo a água potável e segura para todos</P>
            <P><strong>6.2&nbsp;</strong> Até 2030, alcançar o acesso a saneamento e higiene adequados e equitativos para todos, e acabar com a defecação a céu aberto, com especial atenção para as necessidades das mulheres e meninas e daqueles em situação de vulnerabilidade</P>
            <P><strong>6.3&nbsp;</strong> Até 2030, melhorar a qualidade da água, reduzindo a poluição, eliminando despejo e minimizando a liberação de produtos químicos e materiais perigosos, reduzindo à metade a proporção de águas residuais não tratadas e aumentando substancialmente a reciclagem e reutilização segura globalmente</P>
            <P><strong>6.4&nbsp;</strong> Até 2030, aumentar substancialmente a eficiência do uso da água em todos os setores e assegurar retiradas sustentáveis e o abastecimento de água doce para enfrentar a escassez de água, e reduzir substancialmente o número de pessoas que sofrem com a escassez de água</P>
            <P><strong>6.5&nbsp;</strong> Até 2030, implementar a gestão integrada dos recursos hídricos em todos os níveis, inclusive via cooperação transfronteiriça, conforme apropriado</P>
            <P><strong>6.6&nbsp;</strong> Até 2020, proteger e restaurar ecossistemas relacionados com a água, incluindo montanhas, florestas, zonas úmidas, rios, aquíferos e lagos</P>
            <P><strong>6.a&nbsp;</strong> Até 2030, ampliar a cooperação internacional e o apoio à capacitação para os países em desenvolvimento em atividades e programas relacionados à água e saneamento, incluindo a coleta de água, a dessalinização, a eficiência no uso da água, o tratamento de efluentes, a reciclagem e as tecnologias de reuso</P>
            <P><strong>6.b&nbsp;</strong> Apoiar e fortalecer a participação das comunidades locais, para melhorar a gestão da água e do saneamento</P>
            </BoxObjetivos>
        </div>
    )
}