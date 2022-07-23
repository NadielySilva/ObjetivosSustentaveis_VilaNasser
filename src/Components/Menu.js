import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//FONTS
// font-family: 'Nunito', sans-serif;
// font-family: 'Kanit', sans-serif;
// font-family: 'Poppins', sans-serif;

const Container = styled.div`
  width: 50vw;
  height: 10vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 426px){
    width: 80vw;
    height: 5vh;
  }
`;

const List = styled.ul`
  width: 50vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 426px){
    width: 80vw;
    height: 5vh;
  }
`;

const ListItem = styled.li`
  font-family: 'Kanit', sans-serif;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  word-break: break-word;
  color: #FFFFFF;
  line-height: 10vh;
  list-style-type: none;
  width: 12vw;
  height: 10vh;

  :hover{
    color: #FF9F1C;
    cursor: pointer;
    border-bottom: 3px solid #FF9F1C;
  }

  @media screen and (max-width: 426px){
    font-size: 0.85rem;
    word-break: break-word;
    line-height: 5vh;
    width: 19.5vw;
    height: 5vh;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  :hover{
    color: #FF9F1C;
    cursor: pointer;
  }
`;

export default function Menu() {
  return (
    <Container>
      <List>
        <ListItem>
          <StyledLink to="/">Início</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="VilaNasser">Vila Nasser</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="Objectives">Objetivos</StyledLink>
        </ListItem>
        <ListItem>Portifólio</ListItem>
      </List>
    </Container>
  )
}
