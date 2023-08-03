import React from 'react'
import { useEffect, useState } from 'react';
import NavBar from '../../componentes/navBar';
import Search from '../../componentes/busqueda/index';
import Pagination from '../../componentes/pagination/index';
import Pokedex from '../../componentes/pokedex/index';
import "./App.css" 
import Pokemon from '../../componentes/pokemon';


function Main() {
    
    const [poke, setPoke] = useState([]); 
    const [load, setLoad] = useState(true);
    const [searchedPokemon, setSearchedPokemon] = useState(null);
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1); 

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
          .then((response) => response.json())
          .then((data) =>
            Promise.all(
              data.results.map((item) => fetch(item.url).then((response) => response.json()))
            )
          )
          .then((allPokemonData) => {
            setPoke(allPokemonData);
            setLoad(false);
          });
      }, []);
    
      const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      }; 

      const handleSearch = (searchTerm) => {
        const pokemonFound = poke.find((pokemon) => pokemon.name.toLowerCase() === searchTerm.toLowerCase());
        if (pokemonFound) {
          setSearchedPokemon(pokemonFound);
          setCurrentPage(1); // Resetear la página cuando se realiza una búsqueda exitosa
        } else {
          setSearchedPokemon(null);
        }
      };
    
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pokemonsToShow = searchedPokemon ? [searchedPokemon] : poke.slice(startIndex, endIndex);
  
    return (
    <div>
        <div>
        <NavBar/> 
      </div>
      <div>
        <Search onSearch={handleSearch} />
      </div>

      <div className='pokegallery'>
        {load ? (
          <p>Loading...</p>
        ) : searchedPokemon ? (
          <Pokedex pokemon={searchedPokemon} />
        ) : (
          pokemonsToShow.map((img, i) => (
            <Pokemon key= {i} pokemon= {img} />
          ))
        )}
      </div>

      {!searchedPokemon && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(poke.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default Main