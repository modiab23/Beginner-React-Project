import React from 'react'
import { useState,useEffect } from 'react'
import './style.js'
import {PortfolioParent,SpanPortfolio,PortfolioText,PortfolioSon,PortfolioTitle,Overlay,OverlayBtn,Image,AllPortfolio,AllSpan} from './style.js'
import axios from 'axios'
function Portfolio() {
    
  const [imager,setImager] = useState([])
  useEffect(() => {
      axios.get('/js/data.json')
      .then((res) => {
        setImager(res.data.portfolio)
      }) 
      .catch((error)=> console.log(error) )
  }, [imager]);

  const portfolioItem = imager.map((item) =>{
      return(

        <PortfolioSon key={item.id}>
          <Image src={item.image} alt='portfolio photo'/>
         <Overlay>
             <OverlayBtn>show photo</OverlayBtn>
         </Overlay>
        </PortfolioSon>


      )

  })

  return (
  <div className='portfolio'>
      <PortfolioTitle>
        <PortfolioText>my portfolio</PortfolioText>
      </PortfolioTitle>
      <AllPortfolio>
        <AllSpan>all</AllSpan>
        <SpanPortfolio>html</SpanPortfolio>
        <SpanPortfolio>photoshop</SpanPortfolio>
        <SpanPortfolio>wordpress</SpanPortfolio>
        <SpanPortfolio>mobile</SpanPortfolio>
      </AllPortfolio>

      <PortfolioParent>
            {portfolioItem}
     
        </PortfolioParent>
   
      
    </div>
  )
}

export default Portfolio
