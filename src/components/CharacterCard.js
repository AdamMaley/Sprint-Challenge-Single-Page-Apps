import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: lightgray;
        padding: 2%;
        margin: 2%;
        width: 50%;
`;

const Heading = styled.h1`
        font-size: 1.4rem;
`;

const Paragraph = styled.p`
        font-size: 1rem;
        margin: 1%;
`;






export default function CharacterCard(props) {

  return <CardWrapper>
    <Heading>{props.character.name}</Heading>
    <Paragraph>{props.character.status}</Paragraph>
  </CardWrapper>
}





