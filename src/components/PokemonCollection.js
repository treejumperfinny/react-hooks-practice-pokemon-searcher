import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
 
  function showPokemon() {
    return pokemon.map((poke) => {
      return <PokemonCard pokemon={poke} key={poke.id} />
    })
  }
  return (
      <Card.Group itemsPerRow={6}>
           <span className="dempokes">
       {showPokemon()}
      </span>
    </Card.Group>
  );
}

export default PokemonCollection;
