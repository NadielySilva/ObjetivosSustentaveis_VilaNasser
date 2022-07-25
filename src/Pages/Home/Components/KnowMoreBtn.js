import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const TertiaryBtn = styled(PrimaryBtn)`
  background-color: transparent;
  
  :hover{
    cursor: pointer;
    background-color: #FFBF69;
  }
`;

export default function KnowMoreBtn(){

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `Objectives`;
    navigate(path);
  };

  return (
    <TertiaryBtn onClick = {routeChange}>Saiba mais</TertiaryBtn>
  )
};
