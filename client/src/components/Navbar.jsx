import React, { useContext } from 'react';
import { UserContext } from "../App";

function Navbar() {
  const { islogin } = useContext(UserContext);

  return (
    <div className='nav'>
      <div className='nav-1'>
        <div>LOGO</div>
        <div className='nav-list'>
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/properties">PROPERTIES</a></li>
            <li><a href="/agents">AGENTS</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
        {islogin ? (
          <button className='nav-button'><a href="/logout">LOG OUT</a></button>
        ) : (
          <button className='nav-button'><a href="/login">LOGIN IN</a></button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
