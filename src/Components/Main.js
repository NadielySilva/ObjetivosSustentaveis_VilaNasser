import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: pink;
`;

export default function Main() {
  return (
    <Container>
      <p>Olá</p>
    </Container>
  )
}