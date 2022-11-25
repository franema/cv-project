import React, { Component } from 'react'
import GeneralInfo from './CV-Inputs/GeneralInfo'
import EdExp from './CV-Inputs/EdExp'
import ContentDisplay from './CV-Display/ContentDisplay'
import ParctilcaExp from './CV-Inputs/PracticalExp'


class main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName:"",
            lastName: "",
            title:"",
            adress:"",
            phone: "",
            email:"",
            description: "",
            university: "",
            degree: "",
            subject: "",
            ed_from: "",
            ed_to: "",
            position:"",
            company:"",
            pr_from:"",
            pr_to:""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: (e.target.value)
        })
    }

    render() {

        return (
            <div className='main-container'>
                <div className="inputs-container">
                    <GeneralInfo handleChange={this.handleChange}></GeneralInfo>
                    <ParctilcaExp handleChange={this.handleChange}></ParctilcaExp>
                    <EdExp handleChange={this.handleChange}></EdExp>
                </div>
                <div className="display-container">                  
                    <ContentDisplay cvInfo={this.state}></ContentDisplay>
                </div>
            </div>
        )
    }
}

export default main