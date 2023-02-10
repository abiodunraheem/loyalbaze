import React from 'react';
import './header.css';
import { GiEternalLove } from 'react-icons/gi';

const Header = () => (
  <header>
    <div className="container header_container">
      <div>
        <p>
          l
          <GiEternalLove />
          yalbaze
        </p>
        <button type="submit">Request a call</button>
        <a href="#contact" className="pop-up">Request a call</a>
      </div>
    </div>
  </header>
);

export default Header;
