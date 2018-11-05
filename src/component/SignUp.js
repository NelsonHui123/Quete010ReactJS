import React, { Component, Fragment } from 'react';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'jacques.chiracsc2@gmail.com'
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(event) {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return(
      <Fragment>
        <h1>{this.state.email}</h1>
        <form>
          <input value={this.state.email} onChange={this.updateEmailField} type="email" name="email"/>
        </form>
      </Fragment>
    );
  }
}

export default SignUp
