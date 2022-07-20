import React from 'react';
import styled from 'styled-components';

//FONTS
// font-family: 'Nunito', sans-serif;
// font-family: 'Kanit', sans-serif;
// font-family: 'Poppins', sans-serif;

const Container = styled.div`
  width: 20vw;
  height: 25vh;
  padding: 12px;
  border: none;
  border-radius: 18px;
  background-color: #FFBF69;

  @media screen and (max-width: 769px){
    width: 30vw;
    height: 30vh;
  }

  @media screen and (max-width: 426px){
    width: 40vw;
    height: 35vh;
  }

  @media screen and (max-width: 376px){
    width: 45vw;
    height: 45vh;
  }
`;

const HighlightText = styled.p`
  font-family: 'Kanit', sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  color: #628A56;
  line-height: 5vh;
  width: 100%;
  height: 5vh;

  @media screen and (max-width: 1441px){
    font-size: 1.25rem;
  }

  @media screen and (max-width: 1025px){
    font-size: 0.85rem;
  }

  @media screen and (max-width: 426px){
    font-size: 0.75rem;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
`;

const PrimaryBtn = styled.button`
  font-family: 'Kanit', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #628A56;
  width: 12vw;
  height: 6vh;
  border: none;
  border-radius: 6vh;
  background-color: #FFBF69;

  :hover{
    cursor: pointer;
    background-color: #fff;
  }

  @media screen and (min-width: 1281px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 426px){
    width: 30vw;
    height: 5vh;
    border-radius: 5vh;
  }
`;

const SecondaryBtn = styled(PrimaryBtn)`
  border: 1px solid #628A56;
  background-color: transparent;
`;

export default function Highlight() {
  return (
    <Container>
      <HighlightText>Lorem Ipsum</HighlightText>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur.</Subtitle>
      <SecondaryBtn>Enclosed</SecondaryBtn>
    </Container>
  )
}
