import Card from "./Card";
import React from "react";
export default function Cards({characters}) {
  return (
<div>
  {characters.map((character) => {
    return (
      <Card
      key={character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin= {character.origin.name}
      image={character.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}
      > </Card>
    );
  })}
  </div>)
  }

  // export default function Cards({ characters }) {
  //   return (
  //     <div>
  //       {characters.map(character => (
  //          <Card key={characters.id} {...characters} />
  //       )
  //     }
  //     </div>
  //   );
  // }

