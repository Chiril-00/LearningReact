import { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  const [pokemon, setPokemon] = useState(undefined)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/charmeleon')
      .then(response => response.json())
      .then(userFromAPI => {
        console.log({userFromAPI})
        setPokemon(userFromAPI)
      })
  }, []);
  
  return (
    <div className="App">
      <h1>Lesson 6</h1>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;