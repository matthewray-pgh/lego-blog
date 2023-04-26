import React from "react";
import { Link } from "react-router-dom";

import '../styles/Header.scss';
import logo from '../assets/brick-logo.png';

export const Header = () => {
  return (
    <>
      <section className="header">
        <img src={logo} alt="Lego brick" className="header__image" />
        <div className="header__title">The Brick Report</div>
        <menu className="header__nav">
          <div><Link href="/">Topics</Link></div>
          <div><Link href="/">Sets</Link></div>
          <div><Link href="/">Builds</Link></div>
        </menu>
      </section>
    </>
    
  );
}