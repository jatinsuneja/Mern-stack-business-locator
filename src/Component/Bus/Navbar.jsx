import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand nav">
              The Business Locator
            </Link>

            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ml-auto">
                <a href="#">
                  <Link to={"/"} className="nav-item nav-link">
                    Home
                  </Link>
                </a>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <Link to={"/Bus"} className="nav-item nav-link">
                  Profile
                </Link>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <Link to={"/picUpld"} className="nav-item nav-link">
                  Upload Pictures
                </Link>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default Nav;
