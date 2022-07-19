import React from "react"
import styled from "styled-components";
import ImgFomeZero from "../assets/fome-zero.png";


const BoxMainFomeZero = styled.section`
width: 100%;
height:85vh;
border: solid;
border-radius: 0.25em;
background: #DDA63A;
border: none;
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const ImageFomeZero = styled.img`
width: 35%;
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const ContainerInformacoes = styled.div`
display: flex;
flex-direction: column;
`
const PText = styled.p`
color: white;
`
const PNumberTwo = styled.p`
color: white;
font-weight: 300;
font-size: 6em;
font-family: 96px "Roboto", sans-serif;
line-height: 1;
`
const H1FomeZero = styled.h1`
color: white;
font-family: "Roboto", sans-serif;
font-size: 2em;
`
const ParagrafoText = styled.p`
color: white;
font-size: 1rem;
line-height: 1.5rem;
width: 50%;
`
const BoxObjetivos = styled.div`
padding: 4vh;
width: 70%;
display: flex;
align-items: center;
flex-direction: column;
margin-left: 8vw;
background: pink;
`
const TextH2 = styled.h2`
padding: 2vh;
font-size: 1.20em;
`
const P = styled.p`
padding: 2vh;
font-size: 18px;
`

export default function FomeZero(){
    return(
        <div>
        <BoxMainFomeZero>
            <Div>
            <ContainerInformacoes>
            <PText>Objetivos De Desenvolvimento Sustentável</PText>
            <PNumberTwo>2</PNumberTwo>
            <H1FomeZero>Fome zero e agricultura sustentável</H1FomeZero>
            <ParagrafoText>Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável</ParagrafoText>
            </ContainerInformacoes>
            
                <ImageFomeZero src={ImgFomeZero} alt="Fome zero e agricultura sustentável"/>
            
            </Div>
        </BoxMainFomeZero>
        <BoxObjetivos>
        <TextH2>Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável</TextH2>
            <P><strong>2.1&nbsp;</strong> Até 2030, acabar com a fome e garantir o acesso de todas as pessoas, em particular os pobres e pessoas em situações vulneráveis, incluindo crianças, a alimentos seguros, nutritivos e suficientes durante todo o ano</P>
            <P><strong>2.2&nbsp;</strong> Até 2030, acabar com todas as formas de desnutrição, incluindo atingir, até 2025, as metas acordadas internacionalmente sobre nanismo e caquexia em crianças menores de cinco anos de idade, e atender às necessidades nutricionais dos adolescentes, mulheres grávidas e lactantes e pessoas idosas</P>
            <P><strong>2.3&nbsp;</strong> Até 2030, dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos, particularmente das mulheres, povos indígenas, agricultores familiares, pastores e pescadores, inclusive por meio de acesso seguro e igual à terra, outros recursos produtivos e insumos, conhecimento, serviços financeiros, mercados e oportunidades de agregação de valor e de emprego não agrícola</P>
            <P><strong>2.4&nbsp;</strong> Até 2030, garantir sistemas sustentáveis de produção de alimentos e implementar práticas agrícolas resilientes, que aumentem a produtividade e a produção, que ajudem a manter os ecossistemas, que fortaleçam a capacidade de adaptação às mudanças climáticas, às condições meteorológicas extremas, secas, inundações e outros desastres, e que melhorem progressivamente a qualidade da terra e do solo</P>
            <P><strong>2.5&nbsp;</strong> Até 2020, manter a diversidade genética de sementes, plantas cultivadas, animais de criação e domesticados e suas respectivas espécies selvagens, inclusive por meio de bancos de sementes e plantas diversificados e bem geridos em nível nacional, regional e internacional, e garantir o acesso e a repartição justa e equitativa dos benefícios decorrentes da utilização dos recursos genéticos e conhecimentos tradicionais associados, como acordado internacionalmente</P>
            <P><strong>2.a&nbsp;</strong> Aumentar o investimento, inclusive via o reforço da cooperação internacional, em infraestrutura rural, pesquisa e extensão de serviços agrícolas, desenvolvimento de tecnologia, e os bancos de genes de plantas e animais, para aumentar a capacidade de produção agrícola nos países em desenvolvimento, em particular nos países menos desenvolvidos</P>
            <P><strong>2.b&nbsp;</strong> Corrigir e prevenir as restrições ao comércio e distorções nos mercados agrícolas mundiais, incluindo a eliminação paralela de todas as formas de subsídios à exportação e todas as medidas de exportação com efeito equivalente, de acordo com o mandato da Rodada de Desenvolvimento de Doha</P>
            <P><strong>2.c&nbsp;</strong> Adotar medidas para garantir o funcionamento adequado dos mercados de commodities de alimentos e seus derivados, e facilitar o acesso oportuno à informação de mercado, inclusive sobre as reservas de alimentos, a fim de ajudar a limitar a volatilidade extrema dos preços dos alimentos</P>
            </BoxObjetivos>
        </div>
    )
}