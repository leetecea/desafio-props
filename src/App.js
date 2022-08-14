import React, {Component} from "react";
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Card from './components/Card.js'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`


export default class App extends Component{
    render(){
        return(
            <>
            <GlobalStyle />
            <Header />
            <Main />
            <Card nome="Letícia" idade={23} tecnologia=" Javascript e React" /> 
            <Footer />
            </>
        )
    }
}