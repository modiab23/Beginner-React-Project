import React from 'react'
import './style.js'
import {ContactParent,ContactText,InputEmail,InputSubject,InputText,ButtonContact, TextArea} from './style.js'
import Footer from '../Footer/index.js'
function Contact() {
  return (
<div>
<ContactParent>
         <ContactText>drop me a line</ContactText>
      
      <form>
        <InputText type='text' placeholder='your name'/>
        <InputEmail type='text' className='InputEmail' placeholder='your email'/> <br/>
        <InputSubject type='text' className='InputSubject'placeholder='your subject'/> <br/>
        <TextArea className='InputTextArea' placeholder='your message'/> <br/>
        <ButtonContact className='ButtonContact'>send your message</ButtonContact>
      </form>
    </ContactParent>
   <Footer/>
</div>

   
  )
}

export default Contact
