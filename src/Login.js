import React from "react";
import { Link } from 'react-router-dom';

const Login = () =>
  (
    <div>
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
          <Link to="/" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-link mr-2">Sign up</Link>
        </div>
      </form>
    </div>
  )

export default Login;
