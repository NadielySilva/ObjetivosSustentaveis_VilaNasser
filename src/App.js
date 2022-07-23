import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//IMPORTING COMPONENTS
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import VilaNasser from './Pages/VilaNasser/Components/VilaNasser';
import Objectives from './Pages/Objetivos/Objectives';

//FONTS
// font-family: 'Nunito', sans-serif;
// font-family: 'Kanit', sans-serif;
// font-family: 'Poppins', sans-serif;

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
        <Router>
          <Header />

          <Routes>
            <Route path='/' element={<Home />}>Início</Route>
            <Route path='VilaNasser' element={<VilaNasser />}>Vila Nasser</Route>
            <Route path='Objectives' element={<Objectives />}>Objetivos</Route>
          </Routes>
        </Router>
      </Container>
    )
  }
}
