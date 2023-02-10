import React from 'react';
import './header.css';
import circle1 from '../../assets/circle1.png';
import circle2 from '../../assets/circle2.png';
import { GiEternalLove } from 'react-icons/gi';

const Header = () => (
  <header>
    <div className="container header_container">
      <div className="circle1">
        <img src={circle1} alt="header first circle" />
      </div>
      <div className="circle2">
        <img src={circle2} alt="header second circle" />
      </div>
      <div>
        <p>l<GiEternalLove />yalbaze</p>
        <button>Request a call</button>
        <a href="#contact" className="pop-up">Request a call</a>
      </div>
    </div>
  </header>
);

export default Header;
