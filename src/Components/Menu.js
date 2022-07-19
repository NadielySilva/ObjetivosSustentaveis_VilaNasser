import React from 'react';
import styled from 'styled-components';

//FONTS
// font-family: 'Nunito', sans-serif;
// font-family: 'Kanit', sans-serif;
// font-family: 'Poppins', sans-serif;

const Container = styled.div`
  width: 50vw;
  height: 10vh;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  width: 50vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px){
    width: 50vw;
  }
`;

const ListItem = styled.li`
  font-family: 'Kanit', sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  line-height: 10vh;
  list-style-type: none;
  width: 12vw;
  height: 10vh;

  @media screen and (max-width: 1024px){
    font-size: 0.85rem;
    width: 12vw;
  };

  :hover{
    color: #FF9F1C;
    cursor: pointer;
    border-bottom: 3px solid #FF9F1C;
  }
  
`;

export default function Menu() {
  return (
    <Container>
      <List>
        <ListItem>Início</ListItem>
        <ListItem>Vila Nasser</ListItem>
        <ListItem>Objetivos</ListItem>
        <ListItem>Portifólio</ListItem>
      </List>
    </Container>
  )
}
