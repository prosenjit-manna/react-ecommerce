import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';

export default function Login() {
  return (
    <div className="container">
        <div className="row">
          <div className="text-center">
            <h2 className="mb-4">Sign In</h2>
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="form-data">
              <form>
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="userEmail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <p className="mb-5">Forgot your password?</p>

                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary px-5">
                    Sign In
                  </button>
                </div>

                <p className="text-center">
                  Don't have an account? <Link to={routes.signUp}>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
