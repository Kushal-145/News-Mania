
import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 const App =(porps)=> {
    let pageSize=15;
   let  apikey = process.env.REACT_APP_DATA       //"683ee8a817514f53bbdd9c10d817dada"
    const [progress, setpro] = useState(0);    
   
///---> render is a lifecycke method whose purpose is to render all the HTML information onto the \screen 
    return (
      <div>
     <Router>
     <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
      <Navbar/> 
     


     
  <Routes> <Route exact path ="/" element ={<News              apikey ={ apikey} progress ={ setpro} pageSize={ pageSize} country ="in" category ="general"/>}/>             </Routes>
  <Routes> <Route exact path ="/business" element ={<News      apikey ={ apikey} progress ={ setpro}  pageSize={ pageSize} country ="in" category ="business"/>}/>        </Routes>
  <Routes> <Route exact path ="/entertainment" element ={<News apikey ={ apikey} progress ={ setpro} pageSize={ pageSize} country ="in" category ="entertainment"/>}/> </Routes>
  <Routes> <Route exact path ="/health" element ={<News        apikey ={ apikey} progress ={ setpro} pageSize={ pageSize} country ="in" category ="health"/>}/>        </Routes>
  <Routes> <Route exact path ="/science" element ={<News       apikey ={ apikey} progress ={ setpro} pageSize={ pageSize} country ="in" category ="science"/>}/>       </Routes>
  <Routes> <Route exact path ="/sports" element ={<News        apikey ={ apikey} progress ={ setpro} pageSize={ pageSize} country ="in" category ="sports"/>}/>       </Routes>
  <Routes> <Route exact path ="/technology" element ={<News    apikey ={ apikey} progress ={ setpro} pageSize={ pageSize} country ="in" category ="technology"/>}/>   </Routes>

          
       
        </Router>
      </div>
    )
  }
export default App;

