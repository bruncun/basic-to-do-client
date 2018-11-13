import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', isFormSubmitted: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }


  render() {
    if (this.state.isFormSubmitted) return <Redirect to="/todos" />
    return (
      <div>
        <h1 className="h3">New Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="title">Title</label>
            <input className="form-control" onChange={this.handleTitleChange} aria-describedby="title" placeholder="Create a React todo app" required />
          </div>
          <div className="form-group">
            <label for="description">Description (optional)</label>
            <textarea className="form-control" onChange={this.handleDescriptionChange} aria-describedby="description" placeholder="Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for." />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Create</button>
          </div>
        </form>
      </div>
    )
  }

  handleTitleChange({ target: { value } }) {
    this.setState({ title: value });
  } 

  handleDescriptionChange({ target: { value } }) {
    this.setState({ description: value });
  } 

  handleSubmit(event) {
    event.preventDefault()
    const todo = {
      title: this.state.title,
      description: this.state.description,
      doneyet: false
    }
    fetch('http://localhost:5000/api/tasks/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      credentials: 'include',
      body: JSON.stringify(todo)
    })
    .then(response => response.json())
    .then(todo => this.setState({ isFormSubmitted: true }))
  }
}

export default NewTodo;
