import React from 'react'
import "./Nav.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from "react";


export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="/" onClick={() => setActiveNav('/')} className={activeNav === "#" ? "active" : " "}><AiOutlineHome/></a>
      <a href="#about" className={activeNav === "#about" ? "active" : " "} onClick={() => setActiveNav('#about')} ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? "active" : " "}><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "active" : " "}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : " "}><AiOutlineMessage/></a>
    </nav>
  )
}
