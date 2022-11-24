import React, { Component } from 'react'

class ContentDisplay extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

  render() {
    const {edInfo} = this.props

    return (
      <div>
        <p>{edInfo.university}</p>
        <p>{edInfo.degree}</p>
        <p>{edInfo.subject}</p>
        <p>{edInfo.from}</p>
        <p>{edInfo.to}</p>
      </div>
    )
  }
}

export default ContentDisplay