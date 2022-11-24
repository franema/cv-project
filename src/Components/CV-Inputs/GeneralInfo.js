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
          <input type="text" className='generalInfo-input' id='firstName' placeholder='First Name' onChange={this.props.handleChange}></input>
          <input type="text" className='generalInfo-input' id='lastName' placeholder='Last Name' onChange={this.props.handleChange}></input>
          <input type="text" className='generalInfo-input' id='title' placeholder='Title' onChange={this.props.handleChange}></input>
          <input type="text" className='generalInfo-input' id='adress' placeholder='Adress' onChange={this.props.handleChange}></input>
          <input type="text" className='generalInfo-input' id='phone' placeholder='Phone' onChange={this.props.handleChange}></input>
          <input type="text" className='generalInfo-input' id='email' placeholder='Email' onChange={this.props.handleChange}></input>
          <input type="text" className='generalInfo-input' id='description' placeholder='Description' onChange={this.props.handleChange}></input>
      </div>
    )
  }
}

export default GeneralInfo