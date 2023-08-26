import React, { useState } from 'react';
import './Style.css';
import Logo from "./Images/logo.png"
import Title from "./Images/KeazoNBOOKS.png"
import Heart from "./Images/bx_bx-book-heart.png"
import Notify from "./Images/ic_round-notifications-none.png"
import Premium from "./Images/fluent_premium-person-20-regular.png"
import Photo from "./Images/IMG20210528181544.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="logo"><img src={Logo} alt="logo Image"/></div>
      <div className="title"><img id="title" src={Title} alt="Title name"/>
      </div>
      
      <div className="search">
        <input type="text" 
        placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." />
        <button className="search-button">Search</button>
      </div>
      <div className="icons">
        <a href="#"><span className="heart"><img src={Heart} alt="logo Image"/></span></a>
        <a href="#"><span className="notifications"><img src={Notify} alt="logo Image"/></span></a>
        <a href="#"><span className="premium"><img src={Premium} alt="logo Image"/></span></a>
        <a href="#"><span className="premium"><img src={Photo} alt="logo Image"/></span></a>
      </div>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
