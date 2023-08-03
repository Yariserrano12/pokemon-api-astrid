import React from "react";
import "./style.css";
const Pokedex = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div>
      <span className="nombre">
        <ul>
          <li>
            {" "}
            <h5>Nombre</h5>
            <p>{pokemon.name}</p>{" "}
          </li>
          <li>
            <h5>PESO</h5>
            <p>{pokemon.weight / 10} Kg</p>{" "}
          </li>
          <li>
            {" "}
            <h5>TAMAÑO</h5>
            <p>{pokemon.height} Cm</p>
          </li>
          <li><h5>SALUD</h5>
          <p>{pokemon.stats[0].base_stat} HP </p> </li>
          <li> <h5>TIPO</h5>
          <p>{pokemon.types[0].type.name}</p> </li>
          <li> <h5>EXPERIENCIA</h5>
          <p>{pokemon.base_experience}</p> </li>
          <li>  <h5>DEFENSA</h5>
          <p>{pokemon.stats[2].base_stat}</p> </li>
          <li>   <h5>ATAQUE</h5>
          <p>{pokemon.stats[1].base_stat}</p> </li> 
          <li><h5>VELOCIDAD</h5>
          <p>{pokemon.stats[5].base_stat}</p></li>
         </ul>
      </span>
      <img
        className="pokemones"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      {/* Otros detalles del pokémon */}
    </div>
  );
};

export default Pokedex;
