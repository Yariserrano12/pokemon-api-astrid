import React from 'react';

const Pokedex = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <h3>Peso {pokemon.weight /10} Kg</h3>
      <h3>Tamaño {pokemon.height} Cm</h3>
      <h2>Carcteristicas</h2>
      <br />
      <h3>Salud {pokemon.stats[0].base_stat} hp</h3>
       <h3>Tipo {pokemon.types[0].type.name}</h3>
       <h2>Expeiencia Base</h2>
       <h3>{pokemon.base_experience}</h3> 
       <h2>game</h2>
       <h3>{pokemon.species}</h3>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    
      {/* Otros detalles del pokémon */}
    </div>
  );
};

export default Pokedex;
