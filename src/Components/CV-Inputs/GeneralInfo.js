import React, { Component } from 'react'


class GeneralInfo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <div className='generalInfo-container'>
          <h2>Personal Information</h2>
          <input type="text" className='info-input' id='firstName' placeholder='First Name' onChange={this.props.handleChange}></input>
          <input type="text" className='info-input' id='lastName' placeholder='Last Name' onChange={this.props.handleChange}></input>
          <input type="text" className='info-input' id='title' placeholder='Title' onChange={this.props.handleChange}></input>
          <input type="text" className='info-input' id='adress' placeholder='Adress' onChange={this.props.handleChange}></input>
          <input type="text" className='info-input' id='phone' placeholder='Phone' onChange={this.props.handleChange}></input>
          <input type="text" className='info-input' id='email' placeholder='Email' onChange={this.props.handleChange}></input>
          <input type="text" className='info-input' id='description' placeholder='Description' onChange={this.props.handleChange}></input>
      </div>
    )
  }
}

export default GeneralInfo