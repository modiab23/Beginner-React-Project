import React from 'react'
import './style.js'
import {AboutParent,AboutList,AboutParagraph,AboutText,AboutTitle} from './style.js';
function About() {
  
  return (
    <AboutParent>
      <AboutText>
        <AboutList>this is me</AboutList>
        <AboutTitle>creative director</AboutTitle>
        <AboutParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatisLorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis</AboutParagraph>
      </AboutText>
      
    </AboutParent>
  )
}

export default About
