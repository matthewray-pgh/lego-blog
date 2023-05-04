import React from "react";

import { Header } from "../components/Header";
import { Unavailable } from "../components/Error";

import '../styles/Sets.scss';

export const Sets = () => {
  return (
    <section className="sets">
      <Header />
      <Unavailable  />
    </section>
  );
}

