import React from 'react';
import {HomeParent,HomeButton,HomeCreative,HomeList,HomeTitle,HomeParagraph} from './style.js';
function Home() {
  return (
    <HomeParent>
      <div className='container'>
         <HomeList>
            <HomeTitle>home title</HomeTitle>
            <HomeCreative>creative director</HomeCreative>
            <HomeParagraph>Iam a professional UX Designer and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.</HomeParagraph>
            <HomeButton>let's begin</HomeButton>
        </HomeList>
      </div>
  
      
    </HomeParent>
  )
}

export default Home;
