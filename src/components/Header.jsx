import React from "react";
import { Link } from "react-router-dom";

import '../styles/Header.scss';
import logo from '../assets/brick-logo.png';

export const Header = () => {
  return (
    <>
      <section className="header">
        <img src={logo} alt="Lego brick" className="header__image" />
        <div className="header__title">
          <Link to="/">Little Brick Blog</Link>
        </div>
        {/* TO DO */}
        {/* <menu className="header__nav">
          <div><Link to="/">Topics</Link></div>
          <div><Link to="/">Sets</Link></div>
          <div><Link to="/">Builds</Link></div>
        </menu> */}
      </section>
    </>
    
  );
}