import React from "react";

import { Header } from "../components/Header";
import { UnderConstruction } from "../components/Error";

import '../styles/Topics.scss';

export const Topics = () => {
  return (
    <section className="topics">
      <Header />
      <UnderConstruction  />
    </section>
  );
}

