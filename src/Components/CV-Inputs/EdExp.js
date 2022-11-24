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
                <input type="text" className='edExp-input' id='university' placeholder='University' onChange={this.props.handleChange}></input>
                <input type="text" className='edExp-input' id='degree' placeholder='Degree' onChange={this.props.handleChange}></input>
                <input type="text" className='edExp-input' id='subject' placeholder='Subject' onChange={this.props.handleChange}></input>
                <input type="text" className='edExp-input' id='from' placeholder='From' onChange={this.props.handleChange}></input>
                <input type="text" className='edExp-input' id='to' placeholder='To' onChange={this.props.handleChange}></input>
                <button>Delete</button>
                <button>Add</button>
            </div>
        )
    }
}

export default EdExp