import React, { Component } from 'react'

class ParctilcaExp extends Component {


    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {


        return (
            <div className='practical-container'>
                <h2>Experience</h2>
                <input type="text" className='info-input' id='position' placeholder='Position' onChange={this.props.handleChange}></input>
                <input type="text" className='info-input' id='company' placeholder='Company' onChange={this.props.handleChange}></input>
                <input type="text" className='info-input' id='pr_from' placeholder='From' onChange={this.props.handleChange}></input>
                <input type="text" className='info-input' id='pr_to' placeholder='To' onChange={this.props.handleChange}></input>
                <button type="submit">Delete</button>
                <button type='reset'>Add</button>
            </div>
        )
    }
}

export default ParctilcaExp