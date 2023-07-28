import React, { useEffect, useState } from 'react';
import NavBar from './componentes/navBar';
import Search from './componentes/busqueda/search';
import Pagination from './componentes/pagination/pagination';
import Pokedex from './componentes/pokedex/pokedex';
import "./App.css"

function App() {
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
    <div className="App">
      <div>
        <NavBar />
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
            <div id={img.id} key={img.id}>
              <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
                <img src={img.sprites.front_default} alt='pokemon' />
                <div>
                  <h5 >{img.name}</h5>
                  <h6>type: {img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
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
  );
}

export default App;



