import React, { Component } from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Modal from './Components/Modal';

//IMPORTING ASSETS
import Among_Nature from "../../Assets/Among_Nature.png"
import Barista from "../../Assets/Barista.png"
import Book from "../../Assets/Book.png"
import Eco_conscius from "../../Assets/Eco_conscius.png"
import Movie_Files from "../../Assets/movie_files.png"
import Music from "../../Assets/Music.png"
import Newspaper from "../../Assets/Newspaper.png"
import Takeout from "../../Assets/Takeout_boxes.png"
import Walking from "../../Assets/walking.png"

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-wrap: wrap;
`;

const OpenObjective = styled.button`
  width: 20vw;
  height: 16vh;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 18px;
  padding: 3px;
  margin-left: 24px;
  margin-bottom: 24px;
  background-color: rgba(255, 159, 28, 0.45);

  :hover{
    cursor: pointer;
    background-color: rgba(98, 138, 86, 0.45);
  }
`;

const OpenObjectiveImg = styled.img`
  width: 9vw;
  height: 12vh;
  object-fit: contain;
`;

const SpanH3 = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  text-align: center;
  line-height: 0.85rem;
  display: inline-block;
  width: 10vw;
  height: 10vh;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  text-align: center;
  line-height: 2rem;
  width: 100%;
  height: 10vh;
`;

export default class Objectives extends Component {

  state={
    info:[
      {CardContainer_title: "Áreas de Lazer",
      CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
      CardContainer_img: (Among_Nature),
      },
      {CardContainer_title: "Estimulo de Negócios Locais",
        CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
        CardContainer_img: (Barista),
      },
      {CardContainer_title: "Biblioteca Pública",
        CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
        CardContainer_img: (Book),
      },
      {CardContainer_title: "Promoção de Cultura e Artistas Locais",
        CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
        CardContainer_img: (Music),
      },
      {CardContainer_title: "Jornal da Vila",
        CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
        CardContainer_img: (Newspaper),
      },
      {CardContainer_title: "Cooperativa de Reciclagem",
        CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
        CardContainer_img: (Eco_conscius),
      },
      {CardContainer_title: "Cinema de Rua",
        CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
        CardContainer_img: (Movie_Files),
      },
      {CardContainer_title: "Etiam et tristique massa, vitae.",
        CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
        CardContainer_img: (Takeout),
      },
      {CardContainer_title: "Etiam et tristique massa, vitae.",
        CardContainer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique orci ipsum, non euismod arcu tempus sed. Vestibulum mattis massa tortor, eleifend mollis dui tempus quis. Duis velit sem, lobortis.",
        CardContainer_img: (Walking),
      },
    ]
  }

  render() {

    return (
      <Container>
        <Title>Objetivos de Desenvolvimento Sustentável Vila Nasser</Title>
        <ButtonContainer>
          {this.state.info.map((item) => (
            <OpenObjective>
              <OpenObjectiveImg src={item.CardContainer_img} alt={item.CardContainer_title} />
              <SpanH3>{item.CardContainer_title}</SpanH3>
            </OpenObjective>
          ))}
        </ButtonContainer>
        {this.state.info.map((item) => (
          <Modal 
            name={item.CardContainer_title}
            text={item.CardContainer_text}
            image={item.CardContainer_img}
          />
        ))}
      </Container>
    )
  }
}
