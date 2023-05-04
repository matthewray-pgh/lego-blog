import React from "react";

import { Header } from "../components/Header";
import { Unavailable } from "../components/Error";

import '../styles/Topics.scss';

export const Topics = () => {
  return (
    <section className="topics">
      <Header />
      <Unavailable  />
    </section>
  );
}

