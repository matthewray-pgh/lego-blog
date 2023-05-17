import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

import sets from '../assets/sets/master.json';
import '../styles/Sets.scss';

export const Sets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(sets);      
  }, []);

  return (
    <section className="sets">
      <Header />

      <section className="sets__content">
        <div className="sets__content-heading">
          <div>Name</div>
          <div>Item</div>
          <div>Category</div>
          <div>Ages</div>
          <div>Pieces</div>
          <div>Points</div>
          <div>Minifigs</div>
        </div>

        {data.map((d) => {
          return (
            <Link to={`/set/${d.item}`} className="sets__content-link" key={`${d.name}-${d.item}`}>
              <div className="sets__content-list">
                <div className="set-name"><span className="sets__mobile-label">Name</span>{d.name}</div>
                <div className="set-item"><span className="sets__mobile-label">Item #</span>{d.item}</div>
                <div className="set-category"><span className="sets__mobile-label">Category</span>{d.category}</div>
                <div className="set-ages"><span className="sets__mobile-label">Ages</span>{d.ages}</div>
                <div className="set-pieces"><span className="sets__mobile-label">Pieces</span>{d.pieces}</div>
                <div className="set-points"><span className="sets__mobile-label">Points</span>{d.points}</div>
                <div className="set-minifig"><span className="sets__mobile-label">Mini-figs</span>{d.minifigs}</div>
              </div>
            </Link>
          )
        })}

        <div className="sets__content-footer">
          {data.length} sets
        </div>
      </section>

    </section>
  );
}

