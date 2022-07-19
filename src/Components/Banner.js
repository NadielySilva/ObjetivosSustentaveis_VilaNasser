import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Appreciate from "../Assets/Appreciation.png"

//FONTS
// font-family: 'Nunito', sans-serif;
// font-family: 'Kanit', sans-serif;
// font-family: 'Poppins', sans-serif;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  border-radius: 0 0 18px 18px;
  background-color: #628A56;
`;

const BannerTextBox = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 18px;
`;

const HighlightedText = styled.p`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 0.75rem;
  color: #FFBF69;
  height: 3vh;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #fff;
  width: 45vw;
  height: 22vh;
`;

const Paragraph = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: #fff;
  width: 45vw;
  height: 12vh;
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
`;

const BannerImgBox = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const OrangeSemicircle = styled.div`
  width: 45vw;
  height: 58vh;
  position: absolute;
  z-index: -0;
  clip-path: circle(42% at 11.75rem 85%);
  background-color: #FF9F1C;
`;

const BannerImg = styled.img`
  width: 35vw;
  height: 40vh;
  position: relative;
  z-index: 1;
  object-fit: contain;
`;

export default function Banner() {
  return (
    <Container>
      <BannerTextBox>
        <HighlightedText>Lorem ipsum</HighlightedText>
        <Title>Lorem ipsum dolor sit amet, dolor sit amet</Title>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum velit at neque vulputate dapibus. Vivamus fermentum velit at neque vulputate dapibus.</Paragraph>
        <PrimaryBtn>Contribute</PrimaryBtn>
      </BannerTextBox>
      <BannerImgBox>
        <OrangeSemicircle></OrangeSemicircle>
        <BannerImg src={Appreciate} alt="Desenho de uma pessoa sentada abraçando um dos joelhos e a outra perna esticada. Entre as pernas ela segura um coração grande e, com uma das mãos esticada para cima, segura um coração menor. Atrás da pessoa há uma flor." />
      </BannerImgBox>
    </Container>
  )
}
