import React  from 'react'
import {useState,useEffect } from 'react'
import './style.js'
import {WorkIcon,WorkParagraph,WorkSon,WorkText,WorkTitle,SonText ,WorkParent} from './style.js'
import axios from 'axios'


function Work() {
   const[items,setItems] = useState([])

   useEffect(() => {
    axios.get("/js/data.json")
    .then((res) =>{
     setItems(res.data.work)
    })

    .catch(error => console.log(error))
  },[]);

  const workItem =  items.map( item => {
    return(
      <WorkSon key={item.id}>
        <WorkIcon className={item.icon_name}></WorkIcon>
           <SonText>{item.title}</SonText>
           <hr/>
           <WorkParagraph>{item.body}</WorkParagraph>
      </WorkSon>     
     
    )
  })

  return (
    <div className='Work'>
             <WorkTitle>
            <WorkText>my work</WorkText>
        </WorkTitle>
          <div className='container'>
        <WorkParent>
              {workItem}
         </WorkParent>  
      </div>

    </div>
      
    
  )
}

export default Work;
