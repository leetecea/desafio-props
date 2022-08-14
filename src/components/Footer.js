import React, { Component } from "react";
import styled from "styled-components";
import Cat from "../imgs/hacker-cat.svg";

const Contain = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
  }

  span{
    color: #307ab3;
  }

  .cat{
    width: 2.5rem;
    height: 2.5rem;
  }
  `;


const Paragrafo = styled.p``;
export default class Footer extends Component {
  render() {
    return (
      <Contain>
        <p>Developed by <span>Letícia Costa</span>. 2022.</p>
        <img src={Cat} alt="" className="cat" />
        <div>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </Contain>
    );
  }
}
