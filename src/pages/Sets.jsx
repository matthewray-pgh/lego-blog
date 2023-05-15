import React from "react";

import { Header } from "../components/Header";
import { Unavailable } from "../components/Error";

import sets from '../assets/sets/master.json';
import '../styles/Sets.scss';

export const Sets = () => {
  return (
    <section className="sets">
      <Header />
      <Unavailable  />

      {sets.map((set) => {
        return (
          <p key={`${set.name}-${set.id}`}>
            {set}
          </p>
        )
      })}
    </section>
  );
}

