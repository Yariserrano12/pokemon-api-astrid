import React from 'react';

const Pokedex = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p>Tipo: {pokemon.type}</p>
      {/* Otros detalles del pokémon */}
    </div>
  );
};

export default Pokedex;
