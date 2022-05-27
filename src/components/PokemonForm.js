import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const [newPoke, setNewPoke] = useState({});

  function handleNewPokemon() {
    const addedPoke = {
      name: newPoke.name,
      hp: parseInt(newPoke.hp),
      sprites: { front: newPoke.frontUrl, back: newPoke.backUrl },
    }

    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(addedPoke),
    })
    // .then((r) => r.json())
    // .then((addedPoke) => setNewPoke(addedPoke))
  }

  function handleInputChange(event) {
    setNewPoke({...newPoke, [event.target.name]: event.target.value})
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleNewPokemon}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleInputChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" type="number" onChange={handleInputChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
