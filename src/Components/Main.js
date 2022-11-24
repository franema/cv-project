import React, { Component } from 'react'
import GeneralInfo from './CV-Inputs/GeneralInfo'
import EdExp from './CV-Inputs/EdExp'
import ContentDisplay from './CV-Display/ContentDisplay'


class main extends Component {

    constructor(props) {
        super(props)

        this.state = {

            university: "",
            degree: "",
            subject: "",
            from: "",
            to: ""

        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: (e.target.value)
        }, () => {
            console.log(this.state)
        })
    }

    render() {

        const { university, degree, subject, from, to } = this.state
        return (
            <div className='main-container'>
                <div className="inputs-container">
                    <GeneralInfo></GeneralInfo>
                    <EdExp handleChange={this.handleChange}></EdExp>
                </div>
                <div className="display-container">
                    <ContentDisplay edInfo={this.state}></ContentDisplay>
                </div>
            </div>
        )
    }
}

export default main