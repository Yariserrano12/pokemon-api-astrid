import React from 'react' 
import './style.css'; 

const NavBar =() => {
  let imgUrl =
  "https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Emblema.jpg";
  return (
    <nav className='navi'>
      <div />
      <div>
        <img src={imgUrl} alt="pokeApi-logo" className="navbar-image" />
      </div>
      <div className='corazon'>❤️</div>
    </nav>
  );
};
 
 export default NavBar