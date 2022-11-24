import React, { Component } from 'react'
import "../../styles.css"

class GeneralInfo extends Component {
  render() {
    return (
      <div className='generalInfo-container'>
          <input type="text" className='generalInfo-input' id='firstName' placeholder='First Name'></input>
          <input type="text" className='generalInfo-input' id='lastName' placeholder='Last Name'></input>
          <input type="text" className='generalInfo-input' id='title' placeholder='Title'></input>
          <input type="text" className='generalInfo-input' id='adress' placeholder='Adress'></input>
          <input type="text" className='generalInfo-input' id='phone' placeholder='Phone'></input>
          <input type="text" className='generalInfo-input' id='email' placeholder='Email'></input>
          <input type="text" className='generalInfo-input' id='description' placeholder='Description'></input>
      </div>
    )
  }
}

export default GeneralInfo