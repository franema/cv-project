import React, { Component } from 'react'

class ContentDisplay extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { cvInfo } = this.props

    return (
      <div className='cv-display'>
        <div className='cv-title'>
          <div className='cv-name'>
            <p className='info-display'>{cvInfo.firstName}</p>
            <p className='info-display'>{cvInfo.lastName}</p>
          </div>
          <p className='info-display'>{cvInfo.title}</p>
        </div>
        <div className='cv-content'>
          <div className='cv-contact'>
            <h2>Adress</h2>
            <p className='info-display'>{cvInfo.adress}</p>
            <h2>Phone</h2>
            <p className='info-display'>{cvInfo.phone}</p>
            <h2>Email</h2>
            <p className='info-display'>{cvInfo.email}</p>
          </div>
          <div className='cv-main'>
            <div className='cv-description'>
              <h2>Description</h2>
              <p className='info-display'>{cvInfo.description}</p>
            </div>
            <div className='cv-experience'>
              <h2>Experience</h2>
              <h4 className='info-display'>{cvInfo.position}</h4>
              <p className='info-display'>{cvInfo.company}</p>
              <p className='info-display'>{cvInfo.pr_from} - {cvInfo.pr_to}</p>
            </div>
            <div className='cv-education'>
              <h2>Education</h2>
              <h4 className='info-display'>{cvInfo.university}</h4>
              <p className='info-display'>{cvInfo.degree}</p>
              <p className='info-display'>{cvInfo.subject}</p>
              <p className='info-display'>{cvInfo.ed_from} - {cvInfo.ed_to}</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ContentDisplay