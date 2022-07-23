import React from 'react';
import styled from 'styled-components';

const Imagem = styled.img`
  width: 100%;
`;

export default function VilaNasser() {
  return (
    <div>
      <p>Pagina em construção. Em breve aqui...</p>
      <h2>História do Bairro</h2>
      <p>Aguardem</p>
      <Imagem src= "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/2oz2b2fz7xmok.jpg" alt='Fachada imitando um castelo com cruz templária' />
    </div>
  )
}