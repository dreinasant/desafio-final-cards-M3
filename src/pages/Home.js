import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Main from "./Main"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration: none;
    
  }

 `




export default function Home() {
  return (
    <div>
      <GlobalStyle/>
        <Header/>
        <Main/>
    </div>
  );
}
