import React from "react"
import styled from "styled-components";
import ImgIgualdade from "../assets/igualdade-genero.png";


const BoxMainIgualdade = styled.section`
width: 100%;
height: 85vh;
border: solid;
border-radius: 0.25em;
background: #FF3A21;
border: none;
display: flex;
align-items: center;
`;

const ImageIgualdade = styled.img`
width: 33%;
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
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
const PNumberFive = styled.p`
color: white;
font-weight: 300;
font-size: 6em;
font-family: 96px "Roboto", sans-serif;
line-height: 1;
`
const H1Igualdade = styled.h1`
color: white;
font-family: "Roboto", sans-serif;
font-size: 2em;
`
const ParagrafoText = styled.p`
color: white;
font-size: 1rem;
line-height: 1.5rem;
width: 75%;
`

const BoxObjetivos = styled.div`
padding: 4vh;
width: 65%;
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
        <BoxMainIgualdade>
            <Div>
            <ContainerInformacoes>
            <PText>Objetivos De Desenvolvimento Sustentável</PText>
            <PNumberFive>5</PNumberFive>
            <H1Igualdade>Igualdade de gênero</H1Igualdade>
            <ParagrafoText>Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas</ParagrafoText>
            </ContainerInformacoes>
            
                <ImageIgualdade src={ImgIgualdade} alt="Igualdade de gênero"/>
            
            </Div>
        </BoxMainIgualdade>
        <BoxObjetivos>
        <TextH2>Objetivo 5. Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas</TextH2>
            <P><strong>5.1&nbsp;</strong> Acabar com todas as formas de discriminação contra todas as mulheres e meninas em toda parte</P>
            <P><strong>5.2&nbsp;</strong> Eliminar todas as formas de violência contra todas as mulheres e meninas nas esferas públicas e privadas, incluindo o tráfico e exploração sexual e de outros tipos</P>
            <P><strong>5.3&nbsp;</strong> Eliminar todas as práticas nocivas, como os casamentos prematuros, forçados e de crianças e mutilações genitais femininas</P>
            <P><strong>5.4&nbsp;</strong> Reconhecer e valorizar o trabalho de assistência e doméstico não remunerado, por meio da disponibilização de serviços públicos, infraestrutura e políticas de proteção social, bem como a promoção da responsabilidade compartilhada dentro do lar e da família, conforme os contextos nacionais</P>
            <P><strong>5.5&nbsp;</strong> Garantir a participação plena e efetiva das mulheres e a igualdade de oportunidades para a liderança em todos os níveis de tomada de decisão na vida política, econômica e pública</P>
            <P><strong>5.6&nbsp;</strong> Assegurar o acesso universal à saúde sexual e reprodutiva e os direitos reprodutivos, como acordado em conformidade com o Programa de Ação da Conferência Internacional sobre População e Desenvolvimento e com a Plataforma de Ação de Pequim e os documentos resultantes de suas conferências de revisão</P>
            <P><strong>5.a&nbsp;</strong> Realizar reformas para dar às mulheres direitos iguais aos recursos econômicos, bem como o acesso a propriedade e controle sobre a terra e outras formas de propriedade, serviços financeiros, herança e os recursos naturais, de acordo com as leis nacionais</P>
            <P><strong>5.b&nbsp;</strong> Aumentar o uso de tecnologias de base, em particular as tecnologias de informação e comunicação, para promover o empoderamento das mulheres</P>
            <P><strong>5.c&nbsp;</strong> Adotar e fortalecer políticas sólidas e legislação aplicável para a promoção da igualdade de gênero e o empoderamento de todas as mulheres e meninas em todos os níveis</P>
            </BoxObjetivos>
        </div>
    )
}