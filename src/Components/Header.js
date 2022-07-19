import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Menu from './Menu';

//IMPORTING ASSETS
import UNLogo from "../Assets/UN_Logo.png"

const Container = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #628A56;
`;

const Logo = styled.img`
  width: 8vw;
  height: 10vh;
  object-fit: contain;
`;

export default function Header() {
  return (
    <Container>
      <Logo src={UNLogo} alt="Logotipo ONU na cor alaranjada"/>
      <Menu />
    </Container>
  )
}
