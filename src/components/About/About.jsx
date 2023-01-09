import React from 'react'
import "./About.css"
import ME from "../../assets/7A8BFC02-752D-406A-8FF8-632F4FCD1FB4_1_201_a.jpeg"

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="containter about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Yaw"/>
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </section>
  )
}
