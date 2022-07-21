import React from "react"
import styled from "styled-components";
import ImageInstagram from "../assets/icon-instagram.png";
import ImageGithub from "../assets/icon-github.png";
import ImageLinkedin from "../assets/icon-linkedin.png";

const Footer = styled.div`
height: 15vh;
width: 100%;
background: #00688B ;
display: flex;
align-items: center;
justify-content: space-around;

`

const ContainerIcons = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;


`
const ImageIcon = styled.img`
width: 4vw;
padding: 0.5vw;
border-radius: 50%;

@media(max-width: 655px){
    width: 25px;
  }
`


export default function Foooter(){
    return(
        <Footer>
            <ContainerIcons>
                <a href="https://www.instagram.com/dreina.sant/" ><ImageIcon src={ImageInstagram} alt="icon instagram"/></a>
                <a href="https://github.com/dreinasant" ><ImageIcon src={ImageGithub} alt="icon github"/></a>
                <a href="https://www.linkedin.com/in/andr%C3%AAina-santos/" ><ImageIcon src={ImageLinkedin} alt="icon linkedin"/></a>
            </ContainerIcons>
        </Footer>
    )
}