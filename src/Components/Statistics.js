import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 32vh;
    background-color: #FFBF69;
    opacity: 25%;
`;

const StatisticsContainer = styled.div`
    width: 15vw;
    height: 18.6vh;

`;

export default class Statistics extends Component {
  
    state={
        vilaNasser_data:[
            {
                stats_number: "52%",
                stats_text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            },
            {
                stats_number: "52%",
                stats_text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            },
            {
                stats_number: "52%",
                stats_text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            },
            {
                stats_number: "52%",
                stats_text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            },
            {
                stats_number: "52%",
                stats_text: "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            }
        ]
    }
  
    render() {

    return (
      <Container>
        {this.state.vilaNasser_data.maps((item) => (
            <StatisticsContainer>
                <h3>{item.stats_number}</h3>
                <p>{item.stats_text}</p>
            </StatisticsContainer>
        ))}
      </Container>
    )
  }
}
