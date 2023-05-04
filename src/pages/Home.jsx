import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

import topics from '../assets/Topics.json';
import '../styles/Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="home__intro">
        <div className="home__intro--text">
          <h2>Welcome to the Little Brick Blog!</h2>
          <p>
            This is a blog about Lego. I'm a big fan of Lego, and I've been collecting Lego sets for a long time. I've also been building my own creations for a long time. I've decided to start this blog to share my love of Lego with the world. I hope you enjoy it!
          </p>
        </div>
      </section>

      <h3 className="home__subtitle">Recent Posts</h3>
      <hr />

      <section className="home__content">
        {topics.map((topic) => {
          return (
            <React.Fragment key={`${topic.title}-${topic.id}-${topic.date}`}>
              <div className="home__topic--image" key={topic.title}>
                <img src={require(`../assets/${topic.image}.png`)} alt={topic.title} />
              </div>
              <div className="home__topic--blurb">
                <h3 className="home__topic--title">{topic.title}</h3>
                <div className="home__topic--date">{topic.date}</div>
                <p>{topic.summary}</p>
                <Link className="home__topic--link" to={topic.url}>Read More ...</Link>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};