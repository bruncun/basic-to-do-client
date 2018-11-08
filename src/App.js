import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-expand bg-light mb-3">
          <a className="navbar-brand mr-auto" href="#">Todos</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">New Todo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="alert alert-primary">
            <span>Oops, something went wrong logging in.</span>
          </div>
          <h1 className="h3">Login</h1>
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input className="form-control" aria-describedby="username" required />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" aria-describedby="password" required />
            </div>
            <div className="form-group">
              <button className="btn btn-primary mr-2">Login</button>
              <button className="btn btn-link">Sign up</button>
            </div>
          </form>
          <h1 className="h3">Sign Up</h1>
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input className="form-control" aria-describedby="username" required />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" aria-describedby="password" required />
            </div>
            <div className="form-group">
              <button className="btn btn-primary mr-2">Sign up</button>
              <button className="btn btn-link">Login</button>
            </div>
          </form>
          <h1 className="h3">New Todo</h1>
          <form>
            <div className="form-group">
              <label for="title">Title</label>
              <input className="form-control" aria-describedby="title" placeholder="Create a React todo app" required />
            </div>
            <div className="form-group">
              <label for="description">Description (optional)</label>
              <textarea className="form-control" aria-describedby="description" placeholder="Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for." />
            </div>
            <div className="form-group">
              <button className="btn btn-success">Create</button>
            </div>
          </form>
          <h1 className="h3">Edit Todo</h1>
          <form>
            <div className="form-group">
              <label for="title">Title</label>
              <input className="form-control" aria-describedby="title" placeholder="Create a React todo app" required />
            </div>
            <div className="form-group">
              <label for="description">Description (optional)</label>
              <textarea className="form-control" aria-describedby="description" placeholder="Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for." />
            </div>
            <div className="form-check form-group">
              <input className="form-check-input" type="checkbox" id="doneyet" />
              <label className="form-check-label" for="doneyet">
                Done yet?
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-primary mr-2">Save</button>
              <button className="btn btn-danger">Remove</button>
            </div>
          </form>
          <h1 className="h3">Todos</h1>
          <div className="list-group mb-3">
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Create a React todo app</h5>
                <small className="text-black-50">Done</small>
              </div>
              <p className="mb-0">Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for.</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Create a React todo app</h5>
                <small className="text-black-50">Done</small>
              </div>
              <p className="mb-0">Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for.</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Create a React todo app</h5>
                <small className="text-black-50">Done</small>
              </div>
              <p className="mb-0">Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for.</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
