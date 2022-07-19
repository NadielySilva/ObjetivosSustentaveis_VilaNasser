import React from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Appreciate from "../Assets/Appreciation.png"

const Container = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    border-radius: 0 0 18px 18px;
    background-color: #628A56;
`;

const BannerTextBox = styled.div`
    width: 50vw;
    height: 40vh;
    
    flex-direction: column;
    align-items: center;
`;

const BannerImgBox = styled.div`
    width: 50vw;
    height: 40vh;
    display: flex;
    align-items: flex-end;
`;

const OrangeSemicircle = styled.div`
    width: 25vw;
    height: 42vh;
    position: absolute;
    z-index: -0;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background-color: #FF9F1C;
`;

const BannerImg = styled.img`
    width: 28vw;
    height: 32vh;
    position: relative;
    z-index: 1;
    object-fit: contain;
`;

export default function Banner() {
  return (
    <Container>
      <BannerTextBox>
        <p>Lorem ipsum</p>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum velit at neque vulputate dapibus. In condimentum risus nec maximus lacinia. Duis malesuada orci interdum interdum sagittis.</p>
        <button>Contribute</button>
      </BannerTextBox>
      <BannerImgBox>
        <OrangeSemicircle></OrangeSemicircle>
        <BannerImg src={Appreciate} alt="Desenho de uma pessoa sentada abraçando um dos joelhos e a outra perna esticada. Entre as pernas ela segura um coração grande e, com uma das mãos esticada para cima, segura um coração menor. Atrás da pessoa há uma flor." />
      </BannerImgBox>
    </Container>
  )
}
