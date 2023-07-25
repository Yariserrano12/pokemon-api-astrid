import React from 'react' 
import './style.css'; 

const NavBar =() => {
  let imgUrl =
  "https://raw.githubusercontent.com/ashbaldry/pokeapi/master/man/figures/logo.png";
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