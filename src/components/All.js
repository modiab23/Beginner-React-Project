import React from 'react';
import Home from './Home/index';
import Work from './Work/index';
import Portfolio from "./Portfolio/index";
import Profile from "./Profile/index";
import About from './About/index';
import SocialMedia from "./SocialMedia/index"
import Contact from './Contact/index';
import Footer from './Footer/index';
function All(){
  return(
     <div className='App'>
      <Home/>
      <Work/>
      <Portfolio/>
      <Profile/>
      <About/>
      <SocialMedia/>
      <Contact/>
      <Footer/>
    </div>
   
  )
}


export default All;