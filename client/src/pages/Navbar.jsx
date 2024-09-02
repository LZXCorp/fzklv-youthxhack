import React from 'react';
import Unity from '../assets/Unity-removebg_small.png';
import LanguageToggle from '../components/LanguageToggle';
import Text from '../components/Text';
import '../assets/Navbar.css';


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='div_logo'><img src={Unity} alt="" className='logo'/></div>
      <ul className='navLinks'>
        <li><a href="#about" className='navLink'><Text english={"About"} chinese={"关于"}/></a></li>
        <li><a href="#services" className='navLink'><Text english={"Event"} chinese={"活动"}/></a></li>
        <li><a href="#contact" className='navLink'><Text english={"Contact"} chinese={"联系"}/></a></li>
        <li className='navLink'><LanguageToggle /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
