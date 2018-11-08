import React from "react";
import { Link } from 'react-router-dom';

const NewTodo = () =>
  (
    <div>
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
          <Link to="/" className="btn btn-success">Create</Link>
        </div>
      </form>
    </div>
  )

export default NewTodo;
