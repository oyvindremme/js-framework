import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            regarding: '',
            message: '',
            nameError: false,
            phoneError: false,
            regardError: false,
            messageError: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    
    validate = () => {

        this.setState({
            nameError: false,
            phoneError: false,
            regardError: false,
            messageError: false
        });

        const phoneRegex = /\d{3}[-.\s]\d{3}[-.\s]\d{4}/;
        
        if (this.state.name === "") {
            this.setState({
                nameError: true
            });
            return false;
        }

        if (this.state.phoneNumber === "" || phoneRegex.test(this.state.phoneNumber) === false) {
            this.setState({
                phoneError: true
            });
            return false;
        }

        if (this.state.regarding === "") {
            this.setState({
                regardError: true
            });
            return false;
        }

        if (this.state.message === "") {
            this.setState({
                messageError: true
            });
            return false;
        }

        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState({
                name: '',
                phoneNumber: '',
                regarding: '',
                message: ''
            });
        }
    }
    
    render() { 
        return (
            <main className="container-fluid bg-dark text-light">
                <div className="row">
                        <div className="col-md-5 pt-5 pb-5">
                            <h1 className="h2 mb-4" style={{
                                borderLeft: "5px solid #dc3545",
                                paddingLeft: "10px"
                            }}>
                                Contact us
                            </h1>
                            <p className="mb-4 lead">Would you like to join the project? Maybe you want to get the first and best when we publish/announce new things. Never hesitate to ask!</p>
                            <div className="mb-4">
                                <h3 className="lead">Phone</h3>
                                <p>+00 123 456 789</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="lead">Email</h3>
                                <p>hello@ptcg.org</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="lead">Address</h3>
                                <p>
                                    10 Main Street<br/>
                                    Norway<br/>
                                    Maine<br/>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7 bg-primary pt-5 pb-5 text-light">
                            <h2 className="h3">Contact form</h2>
                            <p className="lead">Please fill out all the fields below</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label for="name"><strong>Name:</strong></label>
                                    <input
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                    <span className="text-light lead" style={{
                                        display: this.state.nameError ? "block" : "none"
                                    }}>
                                        Field empty!
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label for="phoneNumber"><strong>Phone number:</strong></label>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="form-control"
                                        placeholder="### ### ####"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange}
                                    />
                                    <span className="text-light lead" style={{
                                        display: this.state.phoneError ? "block" : "none"
                                    }}>
                                        Invalid phone number!
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label for="name"><strong>Regarding:</strong></label>
                                    <select
                                        id="regarding"
                                        name="regarding"
                                        className="form-control"
                                        value={this.state.regarding}
                                        onChange={this.handleChange}
                                    >
                                        <option></option>
                                        <option>Enquiry</option>
                                        <option>Complaint</option>
                                        <option>Compliment</option>
                                        <option>Generall message</option>
                                    </select>
                                    <span className="text-light lead" style={{
                                        display: this.state.regardError ? "block" : "none"
                                    }}>
                                        Value must be selected!
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label for="message"><strong>Message:</strong></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-control"
                                        rows="10"
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                    />
                                    <span className="text-light lead" style={{
                                        display: this.state.messageError ? "block" : "none"
                                    }}>
                                        Field empty!
                                    </span>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-light" onClick={this.sendMessage}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </main>
        );
    }
}
 
export default Contact;