import './App.css'; 
import React from 'react'
import NavBar from './componentes/navBar';
import Search from './componentes/busqueda';
import  { useEffect, useState } from 'react'; 
import Pagination from './componentes/pagination'; 
import Pokedex from '../src/componentes/pokedex' 





function App() { 
const [result, setResult] = React.useState([]);
const [poke, setPoke] = React.useState([]);
const [load, setLoad] = React.useState('true');
const arr = []; 
const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
  .then((response) => response.json())
  .then((data) => setResult(
  data.results.map((item) => {
  fetch(item.url)
  .then((response) => response.json())
  .then((allpokemon) => arr.push(allpokemon));
  setPoke(arr);
}),
));
}, []);
setTimeout(() => {
setLoad(false);
}, 1000); 

  return (  
   
<div className="App"> 
<div>
  <NavBar/>
</div>
<div>
  <Search/>
</div>
 
<div className='pokegallery'>
{ load ? (
<p>Loading...</p>
) : (
poke.map((img, i) => (
<div id={img.id} key={img.id}>
<div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
<img  src={img.sprites.front_default} alt='pokemon' />
<div >
<h5 >{img.name}</h5>
<h6>type: {img.types[0].type.name}</h6>
</div> 
<Pokedex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
</div> 

</div>
))
)}
</div> 

</div> 


);
}

    
 

export default App 


