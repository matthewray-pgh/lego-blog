import React from "react";

import { Header } from "../components/Header";
import { Unavailable } from "../components/Error";

import '../styles/Builds.scss';

export const Builds = () => {
  return (
    <section className="builds">
      <Header />
      <Unavailable  />
    </section>
  );
}

