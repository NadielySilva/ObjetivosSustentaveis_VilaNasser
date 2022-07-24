import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 75vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 18px;
    box-shadow: 2px 2px 4px 4px rgb(234, 237, 237);
    margin-top: 15vh;
    margin-bottom: 24px;
`;

const ModalImg = styled.img`
    width: 75vw;
    height: 25vh;
    object-fit: contain;
    border-radius: 18px 18px 0 0;
    background-color: rgba(255, 159, 28, 0.45);
`;

const SubtitleH2 = styled.h2`
    font-family: 'Kanit', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 5vh;
    color: #628A56;
    width: 75vw;
    height: 5vh;
    padding-left: 10px;
`;

const Paragraph = styled.div`
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem;
    text-indent: 2ch;
    overflow-y: auto;
    width: 73.75vw;
    height: auto;
    padding-left: 10px;
    padding-bottom: 10px;
`;

export default function Modal({name, image, text}) {
    return (
        <Container>
            <ModalImg
                src={image}
                alt={name}
            />
            <SubtitleH2>{name}</SubtitleH2>
            <Paragraph>{text}</Paragraph>
        </Container>
    )
}