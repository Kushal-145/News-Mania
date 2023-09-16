import React, { Component } from 'react'
 import loading from './in.gif'

const Spinner =(props)=> {
  
    return (
      <div className=" new">
        <img class = "img"src ={loading} alt ="Loading..."/>
      </div>
    )
  }


export default Spinner
