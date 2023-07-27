import React from 'react' 
import './style.css'; 

import { searchPokemon } from '../../api/api';

const  {useState} = React;

const Search =() => {
   const [Busqueda, setBusqueda] = useState("");

   const onChange = (evento) => { 
   setBusqueda(evento.target.value); 
  
  

   }
    const onClick = async (e) => { 
        const data = await searchPokemon(Busqueda) 
        console.log(data);

    }
    return ( 
      <div>
     <div> 
   <input className='input' placeholder='Buscar pokemon...' onChange={onChange}/> 
    
    </div> 

     <div>
        <button onClick={onClick}>Buscar</button>
     </div>




      </div>
     
    );
  };
   
   export default Search




// function PokedexScreen({ pokemon, loading, error }){
//   return (
//     <div className="pokedex-screen">
//       <div className="pokemon-info">
//         <h2 className="pokemon-name">{pokemon.name}</h2>
//         <img
//           className="pokemon-img"
//           src={pokemon.sprites.front_default}
//           alt={pokemon.name}
//         />
//         <ul className="pokemon-stats">
//           // Aquí iteraremos sobre la lista de estadísticas
//         </ul>
//       </div>
//     </div>
//   )
// }

