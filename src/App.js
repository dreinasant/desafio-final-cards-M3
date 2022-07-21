import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import ErradicaçãoDaPobreza from "./pages/Erradicacao";
import FomeZeroEAgriculturaSustentável from "./pages/FomeZero";
import SaúdeEBemEstar from "./pages/Saude";
import EducaçãoDeQualidade from "./pages/Educacao";
import IgualdadeDeGênero from "./pages/Igualdade";
import ÁguaPotávelESaneamento from "./pages/Saneamento";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style: none;
    
  }
`
const LinkInicio = styled(Link)`
  color: white;
  text-decoration: none;
  position: absolute;
  top: 1.5vh;
  right: 20vw;
  
  &:hover{
    opacity: 0.6;
  }
  @media(max-width: 630px){
    display: flex;
    justify-content: center;
    }
`;

const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  text-align: left;

  @media(max-width: 700px){
    display: flex;
    justify-content: center;
    text-align: center;
  }
  
`
const BoxUl = styled.ul`
font-size: 1em;
font-weight: bold;
font-family: normal normal bold 13px/15px Arial;
text-align: left;
`

const LinkNone = styled(Link)`
display: none;
`

export default function App(){
  return(
    <Router>
      <GlobalStyle/>
      <NavHeader>
        <BoxUl>
          <LinkInicio to="/" ><li>Home</li></LinkInicio>
          <LinkNone to="/erradicacao-da-pobreza" ><li>Erradicação Da Pobreza</li></LinkNone>
          
        </BoxUl>
      </NavHeader>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/erradicacao-da-pobreza" element={<ErradicaçãoDaPobreza/>}/>
        <Route path="/fome-zero-e-agricultura-sustentavel" element={<FomeZeroEAgriculturaSustentável/>} />
        <Route path="/saude-e-bem-estar" element={<SaúdeEBemEstar/>} />
        <Route path="/educacao-de-qualidade" element={<EducaçãoDeQualidade/>} />
        <Route path="/igualdade-de-genero" element={<IgualdadeDeGênero/>}/>
        <Route path="/agua-potavel-e-saneamento" element={<ÁguaPotávelESaneamento/>}/>
      </Routes>
    </Router>
  )
}