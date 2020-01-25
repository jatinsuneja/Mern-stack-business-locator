import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedin: false,
      email: "",
      pass: ""
    };
  }

  submitHandle = event => {
    event.preventDefault();
    this.setState({
      email: event.target.email.value,
      pass: event.target.pass.value
    });
    setTimeout(() =>
      axios
        .post("http://localhost:4000/business/login", {
          email: this.state.email,
          pass: this.state.pass
        })
        .then(res => {
          console.log(res);
          if (!res.data.token) alert(res.data);
          else {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            this.props.history.push(`/`);
          }
        })
        .catch(err => {
          console.log(err);
        })
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="offset-md-3 offset-lg-3 offset-sm-2 col-md-6 col-lg-6 col-sm-6">
              <h3 styled="font-family: 'Karona One'">Log In To Your Account</h3>
              <hr />
            </div>
          </div>
          <form onSubmit={this.submitHandle}>
            <div className="row form-group">
              <div className="offset-md-3 offset-lg-3 offset-sm-2 col-md-6 col-lg-6 col-sm-5">
                <label htmlFor="email">Email :</label>
                <input
                  required
                  className="form-control"
                  autoFocus
                  type="text"
                  id="email"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="offset-md-3 offset-sm-2 offset-lg-3 col-md-6 col-lg-6 col-sm-5">
                <label htmlFor="pass">Password :</label>
                <input
                  required
                  className="form-control"
                  type="password"
                  id="pass"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="offset-md-3 offset-sm-1 offset-lg-3 col-md-2 col-lg-2 col-sm-1">
                <input
                  type="submit"
                  value="Sign In"
                  id="sub-btn"
                  className="btn btn-lg submit text-white"
                />
              </div>
              <div className="offset-md-2 offset-sm-1 offset-lg-2 col-md-2 col-lg-2 col-sm-1">
                <Link to="signup" title="Create New Account">
                  Don't have account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LogIn;
