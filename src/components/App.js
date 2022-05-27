import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(data => setPokemon(data))
  }, [])

  const showSearchPoke = pokemon.filter((poke) => poke.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} setSearch={setSearch} poke={showSearchPoke} />
    </div>
  );
}

export default App;
