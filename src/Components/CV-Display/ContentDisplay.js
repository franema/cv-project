import React, { Component } from 'react'

class ContentDisplay extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { edInfo } = this.props

    return (
      <div className='cv-display'>
        <div className='cv-title'>
          <div className='cv-name'>
            <p className='info-display'>{edInfo.firstName}</p>
            <p className='info-display'>{edInfo.lastName}</p>
          </div>
          <p className='info-display'>{edInfo.title}</p>
        </div>
        <div className='cv-education'>
          <h2>Education</h2>
          <h4 className='info-display'>{edInfo.university}</h4>
          <p className='info-display'>{edInfo.degree}</p>
          <p className='info-display'>{edInfo.subject}</p>
          <p className='info-display'>{edInfo.from} - {edInfo.to}</p>
          <p className='info-display'></p>
        </div>
      </div>
    )
  }
}

export default ContentDisplay