import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';

export default function SignUp() {
  return (
    <div className="container">
        <div className="row">
          <div className="text-center">
            <h2 className="mb-4">Sign Up</h2>
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="form-data">
              <form>
                <div className="mb-3">
                  <label htmlFor="userFirstName" className="form-label"
                    >First Name</label
                  >
                  <input type="text" className="form-control" id="userFirstName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="userlastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="userlastName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="userEmail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>

                <div className="text-center pt-4 mb-3">
                  <button type="submit" className="btn btn-primary px-5">
                    Create An Account
                  </button>
                </div>

                <p className="text-center">
                  Already have an account? <Link to={routes.login}>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
