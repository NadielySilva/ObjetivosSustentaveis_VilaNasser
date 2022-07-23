import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Highlight from './Highlight';
import Card from './Card';
import Statistics from './Statistics';
import SendMessage from './SendMessage';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const HighlightContainer = styled.div`
  margin-left: 24px;
`;

export default function Main() {
  return (
    <Container>
      <HighlightContainer>
        <Highlight />
        <Highlight />
      </HighlightContainer>
      <Card />
      <Statistics />
      <SendMessage />
    </Container>
  )
}
