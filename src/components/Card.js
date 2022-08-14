import React, { Component } from "react";
import styled from "styled-components";
import Cats1 from "../imgs/cats1.png";
import Cats2 from "../imgs/cats2.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50em;
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60rem;
  height: 43.9rem;
  text-indent: 2em;
  border: 1px solid #067edb;
  box-shadow: 2px 2px 4px 4px #3b5d79;

  img{
    width: 41.2%;

  }
  .cats1 {
    position: relative;
    top: 25.6rem;
    right: 17.6rem;
  }

  .cats2{
    position: relative;
    bottom: 25.5rem;
    left: 17.9rem;
  }

  h2 {
    background-color: #ffd3b1;
    border-radius: 2rem;
    box-shadow: 1px 1px 4px 2px #6b6b72;
    padding: 1rem;
    width: 18em;
    text-align: center;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 500;
  }
`;

export default class Card extends Component {
  render() {
    return (
      <>
        <Container>
          <Box>
            <img src={Cats1} alt="" className="cats1" />
            <h2>
              Hello, my name's {this.props.nome}, i'm {this.props.idade} years old and i'm learning {this.props.tecnologia}
            </h2>
            <img src={Cats2} alt="" className="cats2" />
          </Box>
        </Container>
      </>
    );
  }
}
