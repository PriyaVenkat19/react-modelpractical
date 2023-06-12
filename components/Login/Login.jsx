import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.password)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "OK") {
          alert("Login Successful");
        }
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.formSubmitHandler}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={this.emailHandler}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={this.passwordHandler}
            required
          />
        </div>
        <div className="mb-3">
          <div className="custom-checkbox custom-control">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me?
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">Password</a>
          </p>
          <p className=" text-right">
            New User? <a href="/signup">Register here</a>
          </p>
        </div>
      </form>
    );
  }
}

export default LoginComponent;