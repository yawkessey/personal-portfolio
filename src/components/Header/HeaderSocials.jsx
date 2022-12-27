import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="blank"><BsLinkedin/></a>
      <a href="http://github.com" target="blank"><GoMarkGithub/></a>
    </div>
  )
}

export default HeaderSocials