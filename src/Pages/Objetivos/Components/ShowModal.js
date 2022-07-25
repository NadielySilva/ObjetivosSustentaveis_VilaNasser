import React, { useState } from 'react';
import styled from 'styled-components';

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


export default function ShowModal({ image, title, component }) {

    const [ modal, setModal ] = useState(false);

    function ChangeModalState() {
        setModal(!modal);
    }

    return (
        <div>
            <OpenObjective onClick={() => {
                ChangeModalState();
            }}>
                <OpenObjectiveImg src={image} alt={title} />
                <SpanH3>{title}</SpanH3>
            </OpenObjective>
            {modal && { component }}
        </div>
    )
}
