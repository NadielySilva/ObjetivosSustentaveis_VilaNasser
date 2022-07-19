import React from 'react';
import styled from 'styled-components';

//FONTS
// font-family: 'Kanit', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;

const Container = styled.div`
    width: 50vw;
    height: 10vh;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    :hover{
        color: #FF9F1C;
        cursor: pointer;
        border-bottom: 3px solid #FF9F1C;
    }
`;

export default function Menu() {
  return (
    <Container>
      <nav>
        <List>
            <ListItem>Início</ListItem>
            <ListItem>Vila Nasser</ListItem>
            <ListItem>Objetivos</ListItem>
            <ListItem>Portifólio</ListItem>
        </List>
      </nav>
    </Container>
  )
}
