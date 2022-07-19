import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Menu from './Menu';

//IMPORTING ASSETS
import UNLogo from "../Assets/UN_Logo.png"

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px 0 18px;
  background-color: #628A56;

  @media screen (max-width: 1024px){
    height: 10vh;
  }

  @media screen (max-width: 1024px){
    height: 10vh;
  }
`;

const Logo = styled.img`
  width: 6vw;
  height: 8vh;
  object-fit: contain;

  @media screen (max-width: 1024px){
    width: 6vw;
    height: 8vh;
  }
`;

export default function Header() {
  return (
    <Container>
      <Logo src={UNLogo} alt="Logotipo ONU na cor alaranjada"/>
      <Menu />
    </Container>
  )
}
