import React ,{useState,useEffect} from 'react'
import './style.js'
import {Social,SocialItem,SocialLastItem,SocialSon1,SocialSon2,SocialSon3,SocialSonIcon1,SocialSonIcon2,SocialSonIcon3} from './style.js'
import axios from 'axios'
function SocialMedia() {
 const [network,setNetwork] = useState([])
 useEffect (()=>{
   axios.get('/js/data.json')
   .then((res)=>{
      setNetwork(res.data.social)
   })
   .catch((error)=>{
    console.log(error)
   })
 })

 const getNetwork = network.map((item)=>{
  return(
    <SocialSon1>
    <SocialSonIcon1 className={item.icon}></SocialSonIcon1>
    <div className='SocialItem'>
    <SocialItem>{item.title}</SocialItem>
    <SocialLastItem>{item.body}</SocialLastItem>
    </div>

  </SocialSon1>
  )
 })
  return (
    <div className='SocialParent'>
      <Social >  
        {getNetwork}
      
    </Social>

    </div>
   
  )
}

export default SocialMedia
