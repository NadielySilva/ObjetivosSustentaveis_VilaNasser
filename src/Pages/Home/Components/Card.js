import React, { Component } from 'react';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import KnowMoreBtn from './KnowMoreBtn';

//IMPORTING ASSETS
import Among_Nature from "../../../Assets/Among_Nature.png"
import Barista from "../../../Assets/Barista.png"
import Book from "../../../Assets/Book.png"
import Eco_conscius from "../../../Assets/Eco_conscius.png"
import Movie_Files from "../../../Assets/movie_files.png"
import Music from "../../../Assets/Music.png"
import Newspaper from "../../../Assets/Newspaper.png"
import Takeout from "../../../Assets/Takeout_boxes.png"
import Walking from "../../../Assets/walking.png"

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  width: 16vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border: none;
  border-radius: 18px;
  box-shadow: 2px 2px 4px 4px rgb(234, 237, 237);
  padding: 10px;
  margin-left: 24px;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 8vw;
  height: 14vh;
  object-fit: cover;
  clip-path: circle(50%);
`;

const SubtitleH3 = styled.h3`
  font-size: 1rem;
  line-height: 1.05rem;
  width: 14vw;
  height: 9vh;
`;

const Paragraph = styled.p`
  font-size: 0.85rem;
  overflow: hidden;
  line-height: 1.05rem;
  width: 14vw;
  height: 18vh;
`;


export default class Card extends Component{

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

  render(){
    return (
      <Container>
        {this.state.info.map((item) => (
          <CardContainer>
            <Image src={item.CardContainer_img} alt="ilustração sobre $`{item.CardContainer_title}`"/>
            <SubtitleH3>{item.CardContainer_title}</SubtitleH3>
            <Paragraph>{item.CardContainer_text}</Paragraph>
            <KnowMoreBtn onClick={'Objectives'}/>
          </CardContainer>
        ))}
        
      </Container>
    )
  }
}


