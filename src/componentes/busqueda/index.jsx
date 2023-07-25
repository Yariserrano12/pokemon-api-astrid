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