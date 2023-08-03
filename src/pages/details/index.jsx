import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom' 
import { useState } from 'react' 
import Pokedex from '../../componentes/pokedex'
import "./style.css"

const Details =() => {  
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const Navigate = useNavigate () 
  const {id} = useParams () 

  const Return =() => { 
  Navigate ("/")
  } 

  const handleSearch = () => { 

    fetch('https://pokeapi.co/api/v2/pokemon/' +id)
          .then((response) => response.json())
          .then((data) =>  {
           console.log (data) 
           setSearchedPokemon (data) }
          ) 
          
  }; 
   useEffect(() => {handleSearch()}, [])
  return (
    <div>
      <button className='boton' onClick={Return} > 
        Return
      </button> 
      <div className='pagina'> 
      {searchedPokemon && ( <Pokedex pokemon={searchedPokemon} />  )}
      
    </div>
    </div>
  )
} 

export default Details