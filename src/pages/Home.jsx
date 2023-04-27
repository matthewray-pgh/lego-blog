import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Ads } from "../components/Ads";

import topics from '../assets/TopicSummarys.json';

import '../styles/Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="home__content">
        {topics.map((topic, index) => {
          return (
            <React.Fragment key={`${topic.title}-${index}-${topic.date}`}>
              <div className="home__topic--image" key={topic.title}>
                <img src={require(`../assets/${topic.image}.png`)} alt={topic.title} />
              </div>
              <div className="home__topic--blurb">
                <h3 className="home__topic--title">{topic.title}</h3>
                <div className="home__topic--date">{topic.date}</div>
                <p>{topic.summary}</p>
                <Link className="home__topic--link" to={topic.url}>Read More</Link>
              </div>
            </React.Fragment>
          );
        })}
      </section>
      <section className="home__ad-content">
        <Ads dataAdSlot="7639151624950947" />
      </section>
    </div>
  );
};