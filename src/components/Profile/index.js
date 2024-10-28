import React from 'react'
import { useState,useEffect } from 'react';
import './style.js'
import axios from 'axios';
import { ProfileSon, Son,ProfileParent,DetailesSon ,SkillLineParent,SkillLineSon1,SkillLineSon2,SkillLineSon3,SkillParent,ProfileSkillH2,ProfileSkillP,Skill} from './style.js';
function Profile() {
   
  const [info,setInfo]= useState({})
  const [lang,setLang]= useState([])

  useEffect(()=>{
    axios.get("/js/data.json")
    .then((res)=> {
      setInfo (res.data.profile.personal_info)
    }).catch((Error)=> console.log(Error))
  })
  useEffect(()=>{
    axios.get("/js/data.json")
    .then((res)=> {
      setLang (res.data.profile.skills)
    })
    .catch((Error)=> console.log(Error))
  })


 const skillItem = lang.map((item) =>{
  return(
    <SkillParent key={item.id}>
       <h3>{item.skill}</h3>
       <Skill>{item.percentage}</Skill>
     <SkillLineParent>
      <SkillLineSon1></SkillLineSon1>
     </SkillLineParent>
  </SkillParent>
  )
 })
  return (
    <div className='container'>
      <ProfileParent>
      <div className='ProfileSon'>
      <ProfileSon>my profile</ProfileSon>
      <div className='DetailesParent'>
 
         <div className='DetailesSon'>
           <Son>name</Son>
           <DetailesSon>{info.name}</DetailesSon>
         </div>
         <div className='DetailesSon'>
           <Son>birthday</Son>
           <DetailesSon>{info.birthday}</DetailesSon>
         </div>
          <div className='DetailesSon'>
           <Son>address</Son>
           <DetailesSon>{info.address}</DetailesSon>
         </div>
          <div className='DetailesSon'>
           <Son>phone</Son>
           <DetailesSon>{info.phone}</DetailesSon>
         </div>
         <div className='DetailesSon'>
           <Son>email</Son>
           <DetailesSon>{info.email}</DetailesSon>
         </div>
      </div>
   </div>
        <div className='ProfileSkill'>
              <ProfileSkillH2>Some skills</ProfileSkillH2>
              <ProfileSkillP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.</ProfileSkillP>
              {skillItem}
        </div>
      </ProfileParent>
      
    </div>
  )
}

export default Profile;
