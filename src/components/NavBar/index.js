import React from 'react'
import "./index"
import { NavLink } from 'react-router-dom'
import {NavParent ,NavLogo,ListItem,Anchor , UlItem} from "./style"
function NavBar() {
  return (
    <NavParent>
         <div className='container'>
         <div>
             <NavLogo>ultra profile</NavLogo>
         </div>

         <UlItem>
          <ListItem><NavLink className= 'link' to='/'>Home</NavLink></ListItem>
          <ListItem><Anchor  href='/work'>Work</Anchor></ListItem>
          <ListItem><Anchor  href='/Portfolio'>Portfolio</Anchor></ListItem>
          <ListItem><Anchor  href='/Profile'>Profile</Anchor></ListItem>
          <ListItem><Anchor  href='/socialMedia'>Social Media</Anchor></ListItem>
          <ListItem><NavLink className= 'link' to='/contact'>Contact</NavLink></ListItem>
         </UlItem>
              
      </div>

   </NavParent>
  )
}

export default NavBar
