import React, { useState, useEffect} from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';
import styled from 'styled-components';
import SearchForm from './SearchForm.js';








export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
  .then((res) => setCharacters(res.data.results))
  
  .catch((err) => console.log(err));
  }, []);
  

  return (
    <section className="character-list">
      <SearchForm setCharacters={setCharacters} />
      <h2>{characters.map((result, index) => {
        console.log(result);
                return (
                  <div>
                    <CharacterCard character={result} key={index} />
                  </div>
                );

            })}</h2>
    </section>
  );
}
