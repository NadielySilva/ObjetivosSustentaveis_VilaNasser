import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
`;

const Container = styled.div`
    width: 55vw;
    height: 55vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    border-radius: 18px;
    padding: 12px;
    background-color: rgba(98, 138, 86, 0.25);
`;

const TxtContainer = styled.div`
    width: 22.4vw;
    height: 45vh;
`;

const HighlightedText = styled.p`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #FF9F1C;
  line-height: 1.05rem;
  height: 3vh;
`;

const Subtitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #628A56;
  word-break: break-word;
`;

const Paragraph = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: #000;
  line-height: 1.25rem;
  width: 22.4vw;
  height: 10vh;
`;

const FormContainer = styled.div`
    width: 22.4vw;
    height: 45vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    border-radius: 18px;
    padding: 12px;
    background-color: #fff;
`;

const Form = styled.form`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;

const Input = styled.input`
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    line-height: 1rem;
    width: 19.4vw;
    height: 8vh;
    border: none;
    border-radius: 12px;
    background-color: rgba(98, 138, 86, 0.25);
`;

const BiggerInput = styled(Input)`
    height: 12vh;
`;

const InputSubmit = styled.input`
  font-family: 'Kanit', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #628A56;
  width: 12vw;
  height: 6vh;
  position: relative;
  left: 7vw;
  border: none;
  border-radius: 6vh;
  background-color: #FFBF69;

  :hover{
    cursor: pointer;
    background-color: #fff;
  }
`;

export default function SendMessage() {
    return (
        <Center>
            <Container>
                <TxtContainer>
                    <HighlightedText>Title</HighlightedText>
                    <Subtitle>Contact us to get started</Subtitle>
                    <Paragraph>Etiam blandit nisl ut ipsum rutrum lobortis. Aenean pulvinar congue mi, et tempus ante. Maecenas luctus aliquam dui, quis accumsan ipsum bibendum ut.</Paragraph>
                </TxtContainer>
                <FormContainer>
                    <Form action="" method="get">
                        <Input type="text" name='name' placeholder="nome" autoFocus={true} required />
                        <br />
                        <Input type="email" name="email" placeholder="e-mail" autoFocus={true} required />
                        <br />
                        <BiggerInput type="text" name="message" placeholder="mensagem" autoFocus={true} maxLength="300" required/>
                        <br />
                        <InputSubmit type="submit" value="Enviar" />
                    </Form>
                </FormContainer>
            </Container>
        </Center>
    )
}
