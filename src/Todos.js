import React from "react";
import { Link } from 'react-router-dom';

const Todos = () =>
  (
    <div> 
      <h1 className="h3">Todos</h1>
      <div className="list-group mb-3">
        <Link to="todos/edit" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Create a React todo app</h5>
            <small className="text-black-50">Done</small>
          </div>
          <p className="mb-0">Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for.</p>
        </Link>
        <Link to="todos/edit" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Create a React todo app</h5>
            <small className="text-black-50">Done</small>
          </div>
          <p className="mb-0">Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for.</p>
        </Link>
        <Link to="todos/edit" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Create a React todo app</h5>
            <small className="text-black-50">Done</small>
          </div>
          <p className="mb-0">Develop an application that interacts with the provided API in such a way that the user can accomplish all the functions the API was made for.</p>
        </Link>
      </div>
    </div>
  )

export default Todos;
