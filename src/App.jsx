import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [facts, setFacts] = useState([]);

  const getFacts = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())  //response user defined res/banana
      .then(response => {
        console.log(response) //test here
        setFacts(response.results);  //"results is from the api"
      })  
      .catch(err => console.log(err)) //.catch always errors
  }

  return (
    <div >
      <button className="btn btn-primary" onClick={getFacts}>Fetch Pokemon</button>
      {
        facts.map((cat, i) => {  //map loops through the array, in this case  key, value over and over
          return <p key={i}>{cat.name}</p> // .name from api
        })
      }
    </div>
  );
}

export default App;
