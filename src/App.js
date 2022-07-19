import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

//IMPORTING COMPONENTS
import Header from './Components/Header';
import Banner from './Components/Banner';
import Main from './Components/Main';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <Banner />
        <Main />
      </Container>
    )
  }
}
