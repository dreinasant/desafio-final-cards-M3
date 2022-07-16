import React from "react"
import styled, { createGlobalStyle } from "styled-components";
import ImgSaude from "../assets/saude-bem-estar.png";



const BoxMainSaude = styled.section`
width: 100%;
height:85vh;
border: solid;
border-radius: 0.25em;
background: #4C9F38;
border: none;
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const ImageSaude = styled.img`
width: 35%;
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
const PNumberThree = styled.p`
color: white;
font-weight: 300;
font-size: 6em;
font-family: 96px "Roboto", sans-serif;
line-height: 1;
`
const H1Saude = styled.h1`
color: white;
font-family: "Roboto", sans-serif;
font-size: 2em;
`
const ParagrafoText = styled.p`
color: white;
font-size: 1rem;
line-height: 1.5rem;
width: 58%;
`
const BoxObjetivos = styled.div`
padding: 4vh;
width: 62%;
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

export default function Saude(){
    return(
        <div>
        <BoxMainSaude>
            <Div>
            <ContainerInformacoes>
            <PText>Objetivos De Desenvolvimento Sustentável</PText>
            <PNumberThree>3</PNumberThree>
            <H1Saude>Saúde e Bem-Estar</H1Saude>
            <ParagrafoText>Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades</ParagrafoText>
            </ContainerInformacoes>
            
                <ImageSaude src={ImgSaude} alt="Fome zero e agricultura sustentável"/>
            
            </Div>
        </BoxMainSaude>
        <BoxObjetivos>
        <TextH2>Objetivo 3. Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades</TextH2>
            <P><strong>3.1&nbsp;</strong> Até 2030, reduzir a taxa de mortalidade materna global para menos de 70 mortes por 100.000 nascidos vivos</P>
            <P><strong>3.2&nbsp;</strong> Até 2030, acabar com as mortes evitáveis de recém-nascidos e crianças menores de 5 anos, com todos os países objetivando reduzir a mortalidade neonatal para pelo menos 12 por 1.000 nascidos vivos e a mortalidade de crianças menores de 5 anos para pelo menos 25 por 1.000 nascidos vivos</P>
            <P><strong>3.3&nbsp;</strong> Até 2030, acabar com as epidemias de AIDS, tuberculose, malária e doenças tropicais negligenciadas, e combater a hepatite, doenças transmitidas pela água, e outras doenças transmissíveis</P>
            <P><strong>3.4&nbsp;</strong> Até 2030, reduzir em um terço a mortalidade prematura por doenças não transmissíveis via prevenção e tratamento, e promover a saúde mental e o bem-estar</P>
            <P><strong>3.5&nbsp;</strong> Reforçar a prevenção e o tratamento do abuso de substâncias, incluindo o abuso de drogas entorpecentes e uso nocivo do álcool</P>
            <P><strong>3.6&nbsp;</strong> Até 2020, reduzir pela metade as mortes e os ferimentos globais por acidentes em estradas</P>
            <P><strong>3.7&nbsp;</strong> Até 2030, assegurar o acesso universal aos serviços de saúde sexual e reprodutiva, incluindo o planejamento familiar, informação e educação, bem como a integração da saúde reprodutiva em estratégias e programas nacionais</P>
            <P><strong>3.8&nbsp;</strong> Atingir a cobertura universal de saúde, incluindo a proteção do risco financeiro, o acesso a serviços de saúde essenciais de qualidade e o acesso a medicamentos e vacinas essenciais seguros, eficazes, de qualidade e a preços acessíveis para todos</P>
            <P><strong>3.9&nbsp;</strong> Até 2030, reduzir substancialmente o número de mortes e doenças por produtos químicos perigosos, contaminação e poluição do ar e água do solo</P>
            <P><strong>3.a&nbsp;</strong> Fortalecer a implementação da Convenção-Quadro para o Controle do Tabaco em todos os países, conforme apropriado</P>
            <P><strong>3.b&nbsp;</strong> Apoiar a pesquisa e o desenvolvimento de vacinas e medicamentos para as doenças transmissíveis e não transmissíveis, que afetam principalmente os países em desenvolvimento, proporcionar o acesso a medicamentos e vacinas essenciais a preços acessíveis, de acordo com a Declaração de Doha, que afirma o direito dos países em desenvolvimento de utilizarem plenamente as disposições do acordo TRIPS sobre flexibilidades para proteger a saúde pública e, em particular, proporcionar o acesso a medicamentos para todos</P>
            <P><strong>3.c&nbsp;</strong> Aumentar substancialmente o financiamento da saúde e o recrutamento, desenvolvimento e formação, e retenção do pessoal de saúde nos países em desenvolvimento, especialmente nos países menos desenvolvidos e nos pequenos Estados insulares em desenvolvimento</P>
            <P><strong>3.d&nbsp;</strong> Reforçar a capacidade de todos os países, particularmente os países em desenvolvimento, para o alerta precoce, redução de riscos e gerenciamento de riscos nacionais e globais de saúde</P>
            </BoxObjetivos>
        </div>
    )
}