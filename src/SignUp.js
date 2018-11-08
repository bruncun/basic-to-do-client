import React from "react";
import { Link } from 'react-router-dom';

const SignUp = () =>
  (
    <div>
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
          <Link to="/" className="btn btn-primary mr-2">Sign up</Link>
          <Link to="/login" className="btn btn-link">Login</Link>
        </div>
      </form>
    </div>
  )

export default SignUp;
