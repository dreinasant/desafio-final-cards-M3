import React from "react"
import styled, { createGlobalStyle } from "styled-components";
import ImgEducacao from "../assets/educacao.png";


const BoxMainEducacao = styled.section`
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

const ImageEducacao = styled.img`
width: 37%;
padding: vw; 
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin: auto;
width: 90%;
`

const ContainerInformacoes = styled.div`
display: flex;
flex-direction: column;
`
const PText = styled.p`
color: white;
`
const PNumberFour = styled.p`
color: white;
font-weight: 300;
font-size: 6em;
font-family: 96px "Roboto", sans-serif;
line-height: 1;
`
const H1Educacao = styled.h1`
color: white;
font-family: "Roboto", sans-serif;
font-size: 2em;
`
const ParagrafoText = styled.p`
color: white;
font-size: 1rem;
line-height: 1.5rem;
width: 55%;
`

const BoxObjetivos = styled.div`
padding: 4vh;
width: 75%;
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

export default function Educacao(){
    return(
        <div>
        <BoxMainEducacao>
            <Div>
            <ContainerInformacoes>
            <PText>Objetivos De Desenvolvimento Sustentável</PText>
            <PNumberFour>4</PNumberFour>
            <H1Educacao>Educação de qualidade</H1Educacao>
            <ParagrafoText>Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos</ParagrafoText>
            </ContainerInformacoes>
            
                <ImageEducacao src={ImgEducacao} alt="Erradicação da pobreza"/>
            
            </Div>
        </BoxMainEducacao>
        <BoxObjetivos>
        <TextH2>Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos</TextH2>
            <P><strong>4.1&nbsp;</strong> Até 2030, garantir que todas as meninas e meninos completem o ensino primário e secundário livre, equitativo e de qualidade, que conduza a resultados de aprendizagem relevantes e eficazes</P>
            <P><strong>4.2&nbsp;</strong> Até 2030, garantir que todos as meninas e meninos tenham acesso a um desenvolvimento de qualidade na primeira infância, cuidados e educação pré-escolar, de modo que eles estejam prontos para o ensino primário</P>
            <P><strong>4.3&nbsp;</strong> Até 2030, assegurar a igualdade de acesso para todos os homens e mulheres à educação técnica, profissional e superior de qualidade, a preços acessíveis, incluindo universidade</P>
            <P><strong>4.4&nbsp;</strong> Até 2030, aumentar substancialmente o número de jovens e adultos que tenham habilidades relevantes, inclusive competências técnicas e profissionais, para emprego, trabalho decente e empreendedorismo</P>
            <P><strong>4.5&nbsp;</strong> Até 2030, eliminar as disparidades de gênero na educação e garantir a igualdade de acesso a todos os níveis de educação e formação profissional para os mais vulneráveis, incluindo as pessoas com deficiência, povos indígenas e as crianças em situação de vulnerabilidade</P>
            <P><strong>4.6&nbsp;</strong> Até 2030, garantir que todos os jovens e uma substancial proporção dos adultos, homens e mulheres estejam alfabetizados e tenham adquirido o conhecimento básico de matemática</P>
            <P><strong>4.7&nbsp;</strong> Até 2030, garantir que todos os alunos adquiram conhecimentos e habilidades necessárias para promover o desenvolvimento sustentável, inclusive, entre outros, por meio da educação para o desenvolvimento sustentável e estilos de vida sustentáveis, direitos humanos, igualdade de gênero, promoção de uma cultura de paz e não violência, cidadania global e valorização da diversidade cultural e da contribuição da cultura para o desenvolvimento sustentável</P>
            <P><strong>4.a&nbsp;</strong> Construir e melhorar instalações físicas para educação, apropriadas para crianças e sensíveis às deficiências e ao gênero, e que proporcionem ambientes de aprendizagem seguros e não violentos, inclusivos e eficazes para todos</P>
            <P><strong>4.b&nbsp;</strong> Até 2020, substancialmente ampliar globalmente o número de bolsas de estudo para os países em desenvolvimento, em particular os países menos desenvolvidos, pequenos Estados insulares em desenvolvimento e os países africanos, para o ensino superior, incluindo programas de formação profissional, de tecnologia da informação e da comunicação, técnicos, de engenharia e programas científicos em países desenvolvidos e outros países em desenvolvimento</P>
            <P><strong>4.c&nbsp;</strong> Até 2030, substancialmente aumentar o contingente de professores qualificados, inclusive por meio da cooperação internacional para a formação de professores, nos países em desenvolvimento, especialmente os países menos desenvolvidos e pequenos Estados insulares em desenvolvimento</P>
            </BoxObjetivos>
        </div>
    )
}