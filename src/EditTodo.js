import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      doneyet: false,
      isFormSubmitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDoneYetChange = this.handleDoneYetChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/tasks", {
      method: "GET",
      credentials: "include"
    })
      .then(response => response.json())
      .then(todos => {
        const { title, description, doneyet } = todos.find(
          ({ _id }) => _id == this.props.match.params.id
        );
        this.setState({
          title,
          description,
          doneyet
        });
      });
  }

  render() {
    if (this.state.isFormSubmitted) return <Redirect to="/todos" />;
    return (
      <div>
        <h1 className="h3">Edit Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              className="form-control"
              aria-describedby="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="description">Description (optional)</label>
            <textarea
              className="form-control"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              aria-describedby="description"
            />
          </div>
          <div className="form-check form-group">
            <input
              className="form-check-input"
              type="checkbox"
              checked={this.state.doneyet}
              onChange={this.handleDoneYetChange}
              id="doneyet"
            />
            <label className="form-check-label" for="doneyet">
              Done yet?
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary mr-2">Save</button>
            <button onClick={this.handleRemove} className="btn btn-danger">
              Remove
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleTitleChange({ target: { value } }) {
    this.setState({ title: value });
  }

  handleDescriptionChange({ target: { value } }) {
    this.setState({ description: value });
  }

  handleDoneYetChange({ target: { checked } }) {
    this.setState({ doneyet: checked });
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = {
      title: this.state.title,
      description: this.state.description,
      doneyet: this.state.doneyet
    };
    fetch(
      `http://localhost:5000/api/tasks/edit/${this.props.match.params.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        credentials: "include",
        body: JSON.stringify(todo)
      }
    )
      .then(response => response.json())
      .then(todo => this.setState({ isFormSubmitted: true }));
  }

  handleRemove(event) {
    event.preventDefault();
    fetch(
      `http://localhost:5000/api/tasks/delete/${this.props.match.params.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        credentials: "include"
      }
    )
      .then(response => response.json())
      .then(todo => this.setState({ isFormSubmitted: true }));
  }
}

export default EditTodo;
