import React, {Component} from "react";
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Card from './components/Card.js'

export default class App extends Component{
    render(){
        return(
            <>
            <Header />
            <Main />
            <Card nome="Letícia" idade={23} tecnologia=" Javascript e React" /> 
            <Footer />
            </>
        )
    }
}