import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Highlight from './Highlight';
import Card from './Card';
import Statistics from './Statistics';

const Container = styled.div`
  width: 100%;
  height: 100vh;

`;



export default function Main() {
  return (
    <Container>
      <div>
        <Highlight />
        <Highlight />
      </div>
      <Card />
      <Statistics />
    </Container>
  )
}
