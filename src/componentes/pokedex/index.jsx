import React from 'react';

const Pokedex = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <div className='Caracteristicas'>
      <h5>Nombre</h5>
      <p>{pokemon.name}</p>
      <h5>PESO</h5>
      <p>{pokemon.weight /10} Kg</p>
      <h5>TAMAÑO</h5>
      <p>{pokemon.height} Cm</p>
      <h5>SALUD</h5>
       <p>{pokemon.stats[0].base_stat} HP </p>
       <h5>TIPO</h5>
       <p>{pokemon.types[0].type.name}</p>
       <h5>EXPERIENCIA</h5>
       <p>{pokemon.base_experience}</p>
       <h5>DEFENSA</h5>
       <p>{pokemon.stats[2].base_stat}</p>
       <h5>ATAQUE</h5>
       <p>{pokemon.stats[1].base_stat}</p> 
       <h5>VELOCIDAD</h5>
       <p>{pokemon.stats[5].base_stat}</p>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    
      {/* Otros detalles del pokémon */}
    </div>
  );
};

export default Pokedex;
