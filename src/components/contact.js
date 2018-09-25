import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: '',
            subject: ''
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        window.location.href = `mailto:tenysonpartridge@gmail.com?subject=${this.state.subject}`;
        console.log(this.state);
    }

    render() {
        return (
        <div className="contact-form" id="contact">
            <form onSubmit={this.onFormSubmit} action="form">

                <label >First name</label>
                <input type="text" id="fname" name="firstname" placeholder="First Name" value={this.state.fname} onChange={event => this.setState({fname: event.target.value})} />

                <label >Last name</label>
                <input type="text" id="lname" name="lastname" placeholder="Last Name" value={this.state.lname} onChange={event => this.setState({lname: event.target.value})}/>

                <label >Email</label>
                <input type="text" id="email" name="lastname" placeholder="Email" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>

                <label >Subject</label>
                <textarea name="subject" id="subject" placeholder="Message" value={this.state.subject} onChange={event => this.setState({subject: event.target.value})}/>

                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}