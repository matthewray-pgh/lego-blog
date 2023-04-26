import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

import '../styles/Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="home__content">
        <div className="home__topic--blurb">
          <h3 className="home__topic--title">Best Licensed Lego Set</h3>
          <div className="home__topic--date">April 22, 2023</div>
          <p>Marvel, Star Wars, Disney, etc. What is the best licensed lego sets available? We weill dig into the bricks and give you all of the details.</p>
          <Link className="home__topic--link" to="/post/1">Read More</Link>
        </div>
        <div className="home__topic--image">

        </div>

        <div className="home__topic--image">

        </div>
        <div className="home__topic--blurb">
          <h3>Lego Unveils New Star Wars Sets</h3>
          <p>Lego has just announced the release of several new Star Wars sets, including the iconic Millennium Falcon and the fearsome AT-AT walker. These sets are sure to be a hit with both Star Wars and Lego fans, and are perfect for recreating your favorite scenes from the movies.</p>
          <Link className="home__topic--link" to="/post/1">Read More</Link>
        </div>

        <div className="home__topic--blurb">
          <h3>The Top 10 Lego Sets of All Time</h3>
          <p>What are the best Lego sets of all time? We've compiled a list of our top 10 favorites, from classic sets like the Lego City Police Station to modern masterpieces like the Lego Architecture series. Whether you're looking for a challenging build or just want to relive some childhood memories, these sets are sure to delight.</p>  
          <Link className="home__topic--link" to="/post/1">Read More</Link>
        </div>
        <div className="home__topic--image">

        </div>

        <div className="home__topic--image">

        </div>
        <div className="home__topic--blurb">
          <h3>Lego Ideas: A Platform for Fan-Made Creations</h3>
          <p>Lego Ideas is a platform that allows Lego fans to submit their own creations for consideration as official Lego sets. From a giant Lego dinosaur to a fully functioning Lego piano, the possibilities are endless. In this article, we'll take a closer look at some of the most impressive fan-made creations on Lego Ideas and explore how the platform works.</p>
          <Link className="home__topic--link" to="/post/1">Read More</Link> 
        </div>

        <div className="home__topic--blurb">
          <h3>How to Build a Lego Castle</h3>
          <p>Building a Lego castle is a fun and rewarding project that's perfect for all ages. In this tutorial, we'll walk you through the steps of building your own Lego castle, from selecting the right bricks to adding the finishing touches. With a little patience and creativity, you can create a masterpiece that will stand the test of time.</p>
          <Link className="home__topic--link" to="/post/1">Read More</Link>
        </div>
        <div className="home__topic--image">

        </div>
      </section>
    </div>
  );
};