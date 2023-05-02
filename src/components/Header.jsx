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
        <menu className="header__nav">
          <div><Link to="/topics">Topics</Link></div>
          <div><Link to="/sets">Sets</Link></div>
          <div><Link to="/builds">Builds</Link></div>
        </menu>
      </section>
    </>
    
  );
}