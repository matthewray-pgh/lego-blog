import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

import topics from '../assets/Topics.json';
import filler from '../assets/TopicTemplate.json';

import dataTest from '../assets/blogs/20230430.json';

import '../styles/Topic.scss';

export const Topic = () => {
  const [topic, setTopic] = useState(filler);

  const urlParams = useParams();

  console.log('dataTest', dataTest);

  useEffect(() => {
    const index = topics.findIndex(topic => topic.id === urlParams.id.toString());
    import('../assets/Topics.json')
      .then((module) => setTopic(module.default))
      .catch((err) => console.log(err));
  },[urlParams.id, topic.image]);
  
  useEffect(() => {
    console.log('topic', topic);
  },[topic]);

  return (
    <div className="topic">
      <Header />
      <section className="topic__content">
        {/* <h1>Family Visit to LEGOLAND Discovery Center Columbus Ohio</h1>
        <div>{topic.date}</div>
        <p>If you're looking for a fun family outing in Columbus, Ohio, LEGOLAND Discovery Center is definitely worth a visit. This indoor attraction is a must-see for LEGO enthusiasts of all ages.</p>

        <div className="topic__content--image">
          <img src={require(`../assets/${topic.image}.png`)} alt={topic.title} />
        </div>

        <p>The first thing you'll notice when you enter LEGOLAND Discovery Center is the incredible LEGO creations. From towering LEGO buildings to intricate LEGO sculptures, there's something to marvel at around every corner. The attention to detail is amazing, and you'll be blown away by the creativity on display.</p>

        <p>One of the highlights of LEGOLAND Discovery Center is the LEGO Factory Tour, which takes you through the process of how LEGO bricks are made. You'll also have the chance to make your own LEGO brick, which is a fun souvenir to take home.</p>

        <div className="topic__content--image">
          <img src={require(`../assets/${topic.image}.png`)} alt={topic.title} />
        </div>

        <p>For younger children, the DUPLO Village is a must-visit. This area is specifically designed for children aged 2-5, and features larger DUPLO bricks for smaller hands to play with. There are also interactive areas where kids can build, play, and explore.</p>

        <p>Another popular attraction at LEGOLAND Discovery Center is the 4D Cinema. This cinema experience is unlike any other, as you'll feel like you're part of the movie thanks to special effects like wind, rain, and even snow. The movies are all family-friendly, and there are multiple showings throughout the day.</p>

        <div className="topic__content--image">
          <img src={require(`../assets/${topic.image}.png`)} alt={topic.title} />
        </div>

        <p>Of course, no visit to LEGOLAND Discovery Center would be complete without a trip to the LEGO Ninjago Training Camp. Here, you can test your skills on a variety of challenges, including the LEGO Ninjago Laser Maze and the LEGO Ninjago Build Challenge.</p>

        <p>Overall, LEGOLAND Discovery Center in Columbus, Ohio is a great family outing. The attractions are all family-friendly and designed to appeal to a wide range of ages. It's also a great place to beat the heat or escape the cold, since it's an indoor attraction.</p>

        <h2>Tips for Visiting LEGOLAND Discovery Center in Columbus, Ohio:</h2>
        <ul>
          <li>Buy tickets online in advance to save time and money.</li>
          <li>Arrive early to avoid the crowds.</li>
          <li>Wear comfortable shoes, as there's a lot of walking involved.</li>
          <li>Bring a camera, as there are plenty of photo opportunities.</li>
          <li>Consider purchasing a souvenir from the LEGO store on your way out.</li>
        </ul>

        <div className="topic__content--image">
          <img src={require(`../assets/${topic.image}.png`)} alt={topic.title} />
        </div>

        <p>So, if you're looking for a fun and educational family outing in Columbus, Ohio, make sure to add LEGOLAND Discovery Center to your list of must-see attractions.</p> */}

      </section>
    </div>
  )
}