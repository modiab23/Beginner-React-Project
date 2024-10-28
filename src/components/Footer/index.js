import React from 'react'
import "./style.js"
import {FooterCopy,FooterName,FooterParent} from './style.js'

function Footer() {
  return (
    <FooterParent>
      <FooterCopy>copyright &copy; 2024 by <FooterName>Mohamed Diab</FooterName></FooterCopy>
    </FooterParent>
  )
}

export default Footer
