import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Appreciate from "../../../Assets/Appreciation.png"

//FONTS
// font-family: 'Nunito', sans-serif;
// font-family: 'Kanit', sans-serif;
// font-family: 'Poppins', sans-serif;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  border-radius: 0 0 18px 18px;
  margin-bottom: 24px;
  background-color: #628A56;
  

  @media screen and (max-width: 426px){
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
  }
`;

const BannerTextBox = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 18px;

  @media screen and (max-width: 426px){
    width: 100%;
    height: 48vh;
    display: flex;
    flex-direction: column;
  }
`;

const HighlightedText = styled.p`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #FFBF69;
  line-height: 1.05rem;
  height: 3vh;

  @media screen and (max-width: 744px){
    font-size: 1rem;
    line-height: 1.05rem;
    height: 3vh;
  }

  @media screen and (max-width: 426px){
    font-size: 1rem;
    line-height: 1.05rem;
    height: 5vh;
  }
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #fff;
  line-height: 2.5rem;
  width: 45vw;
  height: 15vh;

  @media screen and (max-width: 744px){
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.05rem;
    height: 22vh;
  }

  @media screen and (max-width: 426px){
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.05rem;
    width: 100vw;
    height: 16vh;
  }
`;

const Paragraph = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: #fff;
  line-height: 1.25rem;
  width: 45vw;
  height: 10vh;

  @media screen and (max-width: 744px){
    font-size: 1rem;
    line-height: 1.05rem;
    height: 12vh;
  }

  @media screen and (max-width: 426px){
    font-size: 1rem;
    line-height: 2.05rem;
    width: 100vw;
    height: 16vh;
  }
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

  @media screen and (max-width: 426px){
    width: 24vw;
  }
`;

const BannerImgBox = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media screen and (max-width: 426px){
    width: 100vw;
    height: 42vh;
    justify-content: flex-end;
  }
`;

const OrangeSemicircle = styled.div`
  width: 45vw;
  height: 58vh;
  position: absolute;
  z-index: -0;
  clip-path: circle(42% at 11.75rem 85%);
  background-color: #FF9F1C;

  @media screen and (max-width: 744px){
    clip-path: circle(40% at 9rem 85%);
  }

  @media screen and (max-width: 426px){
    width: 60vw;
    height: 42vh;
    clip-path: circle(60% at 10rem 85%);
  }
`;

const BannerImg = styled.img`
  width: 35vw;
  height: 40vh;
  position: relative;
  object-fit: contain;

  @media screen and (max-width: 744px){
    top: 0.70vh;
  }

  @media screen and (max-width: 426px){
    width: 60vw;
    height: 55vh;
    top: 8.5vh;
  }
`;

export default function Banner() {
  return (
    <Container>
      <BannerTextBox>
        <HighlightedText>Lorem ipsum</HighlightedText>
        <Title>Lorem ipsum dolor sit amet, dolor sit amet</Title>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum velit at neque vulputate dapibus. </Paragraph>
        <PrimaryBtn>Contribute</PrimaryBtn>
      </BannerTextBox>
      <BannerImgBox>
        <OrangeSemicircle></OrangeSemicircle>
        <BannerImg src={Appreciate} alt="Desenho de uma pessoa sentada abraçando um dos joelhos e a outra perna esticada. Entre as pernas ela segura um coração grande e, com uma das mãos esticada para cima, segura um coração menor. Atrás da pessoa há uma flor." />
      </BannerImgBox>
    </Container>
  )
}
