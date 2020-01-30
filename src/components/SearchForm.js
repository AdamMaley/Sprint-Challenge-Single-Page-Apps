import React, { useState, useEffect } from "react";
import axios from "axios";


export default function SearchForm(props) {
  const [input, setInput] = useState("")

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${input}`)
  .then((res) => props.setCharacters(res.data.results))
  
  .catch((err) => console.log(err));
  }, [input]);

    
  return (
    <div className='wrapper'>
      <div className='search-bar-section'>
        <form>
          <input name="search" placeholder="Enter A Name" onChange={(e) => setInput(e.target.value)} />
        </form>
      </div>
    </div>
  )

}
