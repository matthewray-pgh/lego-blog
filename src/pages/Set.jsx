import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

import sets from '../assets/Sets.json';

import '../styles/Set.scss';

export const Set = () => {
  const [set, setSet] = useState([]);
  const urlParams = useParams();

  useEffect(() => {
    const setId = urlParams.id.toString();
    import(`../assets/sets/${setId}/${setId}.json`)
      .then((module) => setSet(module.default))
      .catch((err) => console.log(err));
  },[urlParams.id]);

  return (
    <div className="set">
      <Header />
      <section className="set__content">
        <h1 className="set__content--title">{set.name}</h1>
        <h3 className="set__content--subtitle">{set.category}</h3>
        <div className="set__content--data">
          <a href={set.affliateLink}>
            <img className="set__content--image" border="0" src={set.imageUrl} alt="" />
          </a>
          <section className="set__content--details">
            <div>
              <div className="set__content--details-heading">Ages</div>
              <div className="set__content--details-data">{set.ages}</div>
            </div>
            <div>
              <div className="set__content--details-heading">Pieces</div>
              <div className="set__content--details-data">{set.pieces}</div>
            </div>
            <div>
              <div className="set__content--details-heading">VIP Points</div>
              <div className="set__content--details-data">{set.points}</div>
            </div>
            <div>
              <div className="set__content--details-heading">Minifigures</div>
              <div className="set__content--details-data">{set.minifigs}</div>
            </div>
          </section>
        </div>
        <div className="set__content--description">{set.description}</div>
        {set.affliateLink && 
          <a className="set__content--link" href={set.affliateLink}>
            Show Me More
          </a>
        }
      </section>
    </div>
  );
}