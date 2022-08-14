import React, { Component } from "react";
import styled from "styled-components";
import Kitty from "../imgs/kitty.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #ebd1d2;
  box-shadow: 0px 0px 4px 2px gray;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 40rem;
  }

  img {
    width: 5rem;
  }

  h1 {
    font-family: "Abel", sans-serif;
    font-size: 2.5em;
    text-shadow: 1px 2px 3px #6186be;
  }
`;

const List = styled.ul`
  display: flex;
  width: 50%;
  height: 5rem;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  transition: 1s all;

  li:hover {
    font-style: italic;
    font-size: 1.22em;
    text-shadow: 2px 1px 2px white;
    text-decoration: underline;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <>
        <Nav>
          <div>
            <img src={Kitty} alt="" />
            <h1>Desafio - Props</h1>
          </div>
          <List>
            <li>Home</li>
            <li>About me</li>
            <li>Contact</li>
          </List>
        </Nav>
      </>
    );
  }
}
