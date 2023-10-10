
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      successMessage: "",
      errorMessage: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (!this.validateEmail(this.state.email)) {
      this.setState({ errorMessage: "Invalid email address" });
    } else {
     
      this.setState({
        successMessage: "Form submitted successfully",
        errorMessage: "",
        return:null
      });
     
    }
  };

  validateEmail = (email) => {
    
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <button type="submit" class="buttons">Submit</button>
        </form>
        {this.state.errorMessage && (
          <div className="error">{this.state.errorMessage}</div>
        )}
        {this.state.successMessage && (
          <div className="success">{this.state.successMessage}</div>
        )}
      </div>
    );
  }
}

export default Form;
