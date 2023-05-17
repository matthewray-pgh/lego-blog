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

  const renderTopic = (data) => {
    return(
      // eslint-disable-next-line array-callback-return
      data && data.map((d, index) => {
        if(d.p) {
          return (
            <p className="topic__content--text" key={index}>{d.p}</p>
          );
        } else if(d.img) {
          return (
            <div className="topic__content--image" key={index}>
              <img src={require(`../assets/${d.img.src}.png`)} alt={d.alt} />
            </div>
          )
        } else if(d.h2) {
          return (
            <h2 className="topic__content--subtitle" key={index}>{d.h2}</h2>
          )
        } else if(d.ul) {
          return (
            <ul className="topic__content--unordered-list" key={index}>
              {d.ul.li.map((listitem, index) => {
                return (
                  <li className="topic__content--text" key={index}>{listitem}</li>
                )
              })}
            </ul>
          )}
        }
      )
    )
  }

  return (
    <div className="topic">
      <Header />
      <section className="topic__content">
        <h1 className="topic__content--title">{topic.title}</h1>
        <h3 className="topic__content--subtitle">{topic.subtitle}</h3>
        <div className="topic__content--date">{topic.date}</div>
        {renderTopic(topic.html)}
      </section>
    </div>
  )
}