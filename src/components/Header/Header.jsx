import React from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/7A8BFC02-752D-406A-8FF8-632F4FCD1FB4_1_201_a.jpeg'

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yaw Kessey-Ankomah</h1>
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="Yaw"/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}
