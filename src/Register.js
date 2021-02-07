import React from "react";
import "./Register.css";
import logo from "./logo.png";
import register from "./register.jpg";

const Login = () => {
  return (
    <div>
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="row no-gutters">
              <div className="col-md-7">
                <div className="card-body">
                  <div className="brand-wrapper">
                    <img src={logo} alt="logo" className="logo" />
                  </div>
                  <p className="login-card-description">
                    Sign into your account
                  </p>
                  <form action="#!">
                    <div className="form-group">
                      <label htmlFor="name" className="sr-only">
                        First Name
                      </label>
                      <input
                        type="name"
                        name="firstname"
                        id="firstname"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="lastname" className="sr-only">
                        Last Name
                      </label>
                      <input
                        type="name"
                        name="lastname"
                        id="lastname"
                        className="form-control"
                        placeholder="Last Name"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <input
                      name="login"
                      id="login"
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      defaultValue="Login"
                    />
                  </form>

                  <p className="login-card-footer-text">
                    Don't have an account?
                    <a href="#!" className="text-reset">
                      <span id="reg-btn">Register</span> here
                    </a>
                  </p>
                  <nav className="login-card-footer-nav">
                    <a href="#!">Terms of use.</a>
                    <a href="#!">Privacy policy</a>
                  </nav>
                </div>
              </div>
              <div className="col-md-5">
                <img src={register} alt="register" className="login-card-img" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
