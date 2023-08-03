import React, { useContext } from "react";
//import FavoriteContext from "../context";
import { useNavigate } from "react-router-dom"; 
import "./style.css" 
const Pokemon = (props) => {
  const { pokemon } = props;
 // const { favoritePokemons, updateFavoritePokemons } = useContext(
   // FavoriteContext
  //);
  const Navigate = useNavigate ()
  const redHeart = "❤️";
  const blackHeart = "🖤";
 // const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
   // updateFavoritePokemons(pokemon.name);
  };
 const clickCard = () => {
Navigate ("/pokemon/" + pokemon.name)
 console.log (clickCard)
 }; 

  return (
    <div className="card"  style={{ width: '10rem',minHeight: '15rem', backgroundColor: '#F0F0C9' }} >
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className= 'imagenes'
          onClick={clickCard}
        /> 
       
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart} className="pokemon-heart-btn">
           <div className="pokemon-favorite">{}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
