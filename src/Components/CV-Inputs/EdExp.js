import React, { Component } from 'react'

class EdExp extends Component {


    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {


        return (
            <div className='edExp-container'>
                <h2>Education</h2>
                <input type="text" className='info-input' id='university' placeholder='University' onChange={this.props.handleChange}></input>
                <input type="text" className='info-input' id='degree' placeholder='Degree' onChange={this.props.handleChange}></input>
                <input type="text" className='info-input' id='subject' placeholder='Subject' onChange={this.props.handleChange}></input>
                <input type="text" className='info-input' id='ed_from' placeholder='From' onChange={this.props.handleChange}></input>
                <input type="text" className='info-input' id='ed_to' placeholder='To' onChange={this.props.handleChange}></input>
                <button type="submit">Delete</button>
                <button type='reset'>Add</button>
            </div>
        )
    }
}

export default EdExp