import React from "react";

import { Header } from "../components/Header";
import { UnderConstruction } from "../components/Error";

import '../styles/Builds.scss';

export const Builds = () => {
  return (
    <section className="builds">
      <Header />
      <UnderConstruction  />
    </section>
  );
}

