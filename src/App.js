import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Todos from './Todos';
import NewTodo from './NewTodo';
import EditTodo from './EditTodo';
import SignUp from './SignUp';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setUser = this.setUser.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-light navbar-expand bg-light mb-3">
            <Link to="/" className="navbar-brand mr-auto">Todos</Link>
              {this.state.user && (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/todos/new" className="nav-link">New Todo</Link>
                  </li>
                  <li className="nav-item">
                    <a href onClick={this.handleLogoutClick} className="nav-link">Logout</a>
                  </li>
                </ul>
              )}
          </nav>
          <div className="container">
            <div className="alert alert-primary">
              <span>Oops, something went wrong logging in.</span>
            </div>
            <Route exact path="/" render={props =>
              this.state.user
                ? <Redirect to="/todos" />
                : <Redirect to="/login" /> } />
            <Route path="/signup" render={props =>
              this.state.user
                ? <Redirect to="/todos" />
                : <SignUp {...props} setUser={this.setUser}/> } />
            <Route path="/login" render={props =>
              this.state.user
                ? <Redirect to="/todos" />
                : <Login {...props} setUser={this.setUser}/> } />
            <Route path="/todos" render={props =>
              this.state.user
                ? <Todos {...props} />
                : <Redirect to="/login" /> } />
            <Route path="/todos/new" component={NewTodo} />
            <Route path="/todos/edit" component={EditTodo} />
          </div>
        </div>
      </Router>
    );
  }

  handleLogoutClick() {
    fetch('http://localhost:5000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({ user: undefined }))
  }

  setUser(user) {
    this.setState({ user });
  }
}

export default App;
