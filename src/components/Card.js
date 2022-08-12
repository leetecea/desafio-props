import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <>
        <main>
          <h2>Nome: {this.props.nome}</h2>
          <h2>Idade: {this.props.idade}</h2>
          <h3>Tecnologias que está aprendendo: {this.props.tecnologia}</h3>
        </main>
      </>
    );
  }
}
