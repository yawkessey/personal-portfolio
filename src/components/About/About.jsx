import React from 'react'
import "./About.css"
import ME from "../../assets/7A8BFC02-752D-406A-8FF8-632F4FCD1FB4_1_201_a.jpeg"
import {BsAward} from "react-icons/bs"

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Yaw"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__card-icon"/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <BsAward className="about__card-icon"/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <BsAward className="about__card-icon"/>
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quos ratione a saepe quod velit, soluta odit explicabo eum quasi sit sunt, molestias quis cupiditate veritatis, voluptas reiciendis consequuntur. Incidunt.
          </p>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
