import React from "react";

import '../styles/Error.scss';
import work from '../assets/work.png';

export const Error = () => {
  return (
    <div className="error">
      <h2>Oops! Something went wrong.</h2>
      <p>Sorry, we couldn't find the page you were looking for.</p>
    </div>
  );
};

export const Unavailable = () => {
  return (
    <div className="unavailable">
      <h2>Oops! This page is unavailable.</h2>
      <p>Sorry, this page is being worked on. Please check back later.</p>
      <img className="unavailable__image" src={work} alt="unavailable" />
    </div>
  );
}