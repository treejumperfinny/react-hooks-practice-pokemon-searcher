import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemon, setSearch, search, poke}) {

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} setSearch={setSearch} poke={poke}/>
      <br />
      <PokemonCollection className="collection" pokemon={poke}/>
    </Container>
  );
}

export default PokemonPage;
