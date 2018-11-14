import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import Container from "./Container";
import EditTodo from "./EditTodo";
import SignUp from "./SignUp";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.setUser = this.setUser.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/loggedin", {
      method: "GET",
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => {
        this.setUser(data);
        this.clearMessage();
      });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-light navbar-expand bg-light mb-3">
            <Link to="/" className="navbar-brand mr-auto">
              Todos
            </Link>
            {this.state.user && (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/todos/new" className="nav-link">
                    New Todo
                  </Link>
                </li>
                <li className="nav-item">
                  <a href onClick={this.handleLogoutClick} className="nav-link">
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </nav>
          <Container
            message={this.state.message}
            clearMessage={this.clearMessage}
          >
            <Route
              exact
              path="/"
              render={props =>
                this.state.user ? (
                  <Redirect to="/todos" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/signup"
              render={props =>
                this.state.user ? (
                  <Redirect to="/todos" />
                ) : (
                  <SignUp {...props} setUser={this.setUser} />
                )
              }
            />
            <Route
              path="/login"
              render={props =>
                this.state.user ? (
                  <Redirect to="/todos" />
                ) : (
                  <Login {...props} setUser={this.setUser} />
                )
              }
            />
            <Route
              exact
              path="/todos"
              render={props =>
                this.state.user ? (
                  <Todos todos={this.state.todos} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/todos/new"
              render={props =>
                this.state.user ? (
                  <NewTodo user={this.state.user} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/todos/edit/:id"
              render={props =>
                this.state.user ? (
                  <EditTodo {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Container>
        </div>
      </Router>
    );
  }

  handleLogoutClick() {
    fetch("http://localhost:5000/api/logout", {
      method: "POST",
      credentials: "include"
    })
      .then(response => response.json())
      .then(this.setUser);
  }

  setUser(data) {
    this.setState({
      user: "username" in data ? data : null,
      message: "message" in data ? data.message : null
    });
  }

  clearMessage() {
    this.setState({ message: null });
  }
}

export default App;
