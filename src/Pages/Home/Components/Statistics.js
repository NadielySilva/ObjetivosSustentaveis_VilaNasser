import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 32vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 24px;
    background-color: rgba(255, 159, 28, 0.25);
`;

const StatisticsContainer = styled.div`
    width: 15vw;
    height: 24vh;
    padding: 10px;
`;

const SubtitleH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bolder;
  color: #FF9F1C;
  line-height: 1rem;
  width: 13.5vw;
  height: 5vh;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  text-overflow: ellipsis;
  word-breack: break-all;
  color: #FF9F1C;
  overflow: hidden;
  line-height: 1rem;
  width: 13.5vw;
  height: 15vh;
`;

export default class Statistics extends Component {

  state = {
    vilanasser: [
      {
        number: "52%",
        text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      },
      {
        number: "52%",
        text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      },
      {
        number: "52%",
        text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      },
      {
        number: "52%",
        text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      },
      {
        number: "52%",
        text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      }
    ]
  }

  render() {
    return (
      <Container>
        {this.state.vilanasser.map((item) => (
          <StatisticsContainer>
            <SubtitleH3>{item.number}</SubtitleH3>
            <Paragraph>{item.text}</Paragraph>
          </StatisticsContainer>
        ))}
      </Container>
    )
  }
}
