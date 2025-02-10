import React from 'react';
import '../assets/css/Menu.css'; // Create a CSS file for Menu styles

const Menu = () => {
  return (
    <nav className="Menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;