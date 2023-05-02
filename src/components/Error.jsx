import React from "react";

import '../styles/Error.scss';
import construction from '../assets/construction.png';

export const Error = () => {
  return (
    <div className="error">
      <h2>Oops! Something went wrong.</h2>
      <p>Sorry, we couldn't find the page you were looking for.</p>
    </div>
  );
};

export const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <h2>Oops! This page is still under construction.</h2>
      <p>Sorry, this page is still being built. Please check back later.</p>
      <img className="under-construction__image" src={construction} alt="Under Construction" />
    </div>
  );
}