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
                <Link to={"/"} className="nav-item nav-link">
                  Home
                </Link>

                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <Link to={"/Admin"} className="nav-item nav-link">
                  Categories
                </Link>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <Link to={"/Cities"} className="nav-item nav-link">
                  City
                </Link>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}

                <Link to={"/Register"} className="nav-item nav-link">
                  Register New Business
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
