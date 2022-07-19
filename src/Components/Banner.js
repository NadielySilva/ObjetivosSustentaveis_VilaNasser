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

  @media screen and (max-width: 481px){
    height: 45vh;
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

  @media screen and (max-width: 481px){
    width: 100vw;
    height: 25vh;
    padding-left: 10px;
  }
`;

const HighlightedText = styled.p`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #FFBF69;
  line-height: 1rem;
  height: 3vh;

  @media screen and (min-width: 1281px){
    font-size: 1.5rem;
    line-height: 1.5rem;
    height: 3vh;
  }

  @media screen and (max-width: 813px){
    font-size: 0.85rem;
    line-height: 0.85rem;
    height: 4.75vh;
  }

  @media screen and (max-width: 481px){
    font-size: 1rem;
    line-height: 2.5vh;
    width: 100vw;
    height: 2.5vh;   
  }
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #fff;
  line-height: 2.5rem;
  width: 45vw;
  height: 15vh;

  @media screen and (min-width: 1281px){
    font-size: 3.5rem;
    line-height: 5rem;
  }

  @media screen and (max-width: 813px){
    font-weight: 500;
    font-size: 2rem;
    line-height: 2rem;
    height: 17vh;
  }

  @media screen and (max-width: 481px){
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    width: 100vw;
    height: 9vh;
  }
`;

const Paragraph = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: #fff;
  line-height: 1.25rem;
  width: 45vw;
  height: 10vh;

  @media screen and (min-width: 1281px){
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media screen and (max-width: 813px){
    font-size: 0.85rem;
    line-height: 1rem;
    height: 14vh;
  }

  @media screen and (max-width: 481px){
    font-size: 1rem;
    line-height: 1.25rem;
    width: 100vw;
    height: 7vh;
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

  @media screen and (min-width: 1281px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 481px){
    width: 30vw;
    height: 4.5vh;
    border-radius: 4.5vh;
  }
`;

const BannerImgBox = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media screen and (max-width: 481px){
    width: 100vw;
    height: 20vh;
    justify-content: flex-end;
    padding-left: 10px;
  }
`;

const OrangeSemicircle = styled.div`
  width: 45vw;
  height: 58vh;
  position: absolute;
  z-index: -0;
  clip-path: circle(42% at 11.75rem 85%);
  background-color: #FF9F1C;

  @media screen and (min-width: 1281px){
    clip-path: circle(42% at 22.5rem 85%);
  }
  
  @media screen and (max-width: 1281px){
    clip-path: circle(42% at 14.75rem 85%);
  }

  @media screen and (max-width: 1081px){
    clip-path: circle(40% at 12rem 90%);
  }

  @media screen and (max-width: 813px){
    clip-path: circle(35% at 10rem 85%);
  }

  @media screen and (max-width: 481px){
    clip-path: circle(35% at 9rem 85%);
  }
`;

const BannerImg = styled.img`
  width: 35vw;
  height: 40vh;
  position: relative;
  object-fit: contain;
  
  @media screen and (max-width: 1281px){
    top: 2vh;
  }

  @media screen and (max-width: 1081px){
    top: 5vh;
  }

  @media screen and (max-width: 813px){
    top: 0vh;
  }

  @media screen and (max-width: 481px){
    width: 50vw;
    height: 55vh;
    top: 10vh;    
  }
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
