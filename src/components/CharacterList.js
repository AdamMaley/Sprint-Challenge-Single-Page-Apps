import React, { useState, useEffect} from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';
import styled from 'styled-components';








export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
  .then((res) => setData(res.data.results))
  
  .catch((err) => console.log(err));
  }, []);
  

  return (
    <section className="character-list">
      <h2>{data.map((result, index) => {
        console.log(result);
                return (
                    <CharacterCard character={result} key={index} />
                );

            })}</h2>
    </section>
  );
}
