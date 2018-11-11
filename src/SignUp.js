import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  render() {
    return (
      <div>
        <h1 className="h3">Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input className="form-control" onChange={this.handleUsernameChange} aria-describedby="username" required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" onChange={this.handlePasswordChange} aria-describedby="password" required />
          </div>
          <div className="form-group">
            <button className="btn btn-primary mr-2">Sign up</button>
            <Link to="/login" className="btn btn-link">Login</Link>
          </div>
        </form>
      </div>
    )
  }

  handlePasswordChange({ target: { value } }) {
    this.setState({ password: value });
  } 

  handleUsernameChange({ target: { value } }) {
    this.setState({ username: value });
  } 

  handleSubmit(event) {
    event.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      credentials: 'include',
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(this.props.setUser)
  }
}

export default SignUp;
