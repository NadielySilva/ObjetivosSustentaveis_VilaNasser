import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Highlight from './Highlight';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 18px;
  padding-left: 18px;
`;

export default function Main() {
  return (
    <Container>
      <Highlight />
    </Container>
  )
}
