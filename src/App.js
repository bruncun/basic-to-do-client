import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todos from './Todos';
import NewTodo from './NewTodo';
import EditTodo from './EditTodo';
import SignUp from './SignUp';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-light navbar-expand bg-light mb-3">
            <Link to="/" className="navbar-brand mr-auto">Todos</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/todos/new" className="nav-link">New Todo</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">Logout</Link>
              </li>
            </ul>
          </nav>
          <div className="container">
            <div className="alert alert-primary">
              <span>Oops, something went wrong logging in.</span>
            </div>
            <Route exact path="/" component={Todos} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/todos/new" component={NewTodo} />
            <Route path="/todos/edit" component={EditTodo} />
            <Route path="/logout" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
