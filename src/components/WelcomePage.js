import React from "react";
import styled from 'styled-components';


const CardWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: lightgray;
        padding: 2%;
        margin: 2%;
        width: 100%;
`;


export default function WelcomePage() {
  return (
    <CardWrapper className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </CardWrapper>
  );
}
