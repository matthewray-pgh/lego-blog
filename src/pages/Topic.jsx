import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

import topics from '../assets/Topics.json';
import filler from '../assets/TopicTemplate.json';

import '../styles/Topic.scss';

export const Topic = () => {
  const [topic, setTopic] = useState(filler);

  const urlParams = useParams();

  useEffect(() => {
    const index = topics.findIndex(topic => topic.id === urlParams.id.toString());
    import(`../assets/blogs/${topics[index].filename}.json`)
      .then((module) => setTopic(module.default))
      .catch((err) => console.log(err));
  },[urlParams.id, topic.image]);

  return (
    <div className="topic">
      <Header />
      <section className="topic__content">
        <h1>{topic.title}</h1>
        <h3>{topic.subtitle}</h3>
        <div>{topic.date}</div>
        {topic.html && topic.html.map((item, index) => {
          if(item.p) {
            return (
              <p key={index}>{item.p}</p>
            );
          } else if(item.img) {
            return (
              <div className="topic__content--image" key={index}>
                <img src={require(`../assets/${item.img.src}.png`)} alt={item.alt} />
              </div>
            )
          } else if(item.h2) {
            return (
              <h2 key={index}>{item.h2}</h2>
            )
          } else if(item.ul) {
            return (
              <ul key={index}>
                {item.ul.li.map((listitem, index) => {
                  return (
                    <li key={index}>{listitem}</li>
                  )
                })}
              </ul>
            )}
        })}
      </section>
    </div>
  )
}