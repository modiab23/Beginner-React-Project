import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar/index';
import All from './components/All';
import Contact from './components/Contact/index';
function App(){
  return(
    <BrowserRouter>
     <div className='App'>
      <NavBar/>
      <hr/>
      <Routes>
        <Route exact path='/' element = {<All/>} />
        <Route path='/Contact' element = {<Contact/>} />     
      </Routes>
    </div>

    </BrowserRouter>
 
   
  )
}


export default App;