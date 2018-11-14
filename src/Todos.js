import React, { Component } from "react";
import { Link } from "react-router-dom";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/tasks", {
      method: "GET",
      credentials: "include"
    })
      .then(response => response.json())
      .then(todos => this.setState({ todos }));
  }

  render() {
    return (
      <div>
        <h1 className="h3">Todos</h1>
        <div className="list-group mb-3">
          {this.state.todos.map(todo => (
            <Link
              to={`todos/edit/${todo._id}`}
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{todo.title}</h5>
                <small className="text-black-50">
                  {todo.doneyet ? "Done" : "Not done yet"}
                </small>
              </div>
              <p className="mb-0">{todo.description}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Todos;
