import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

class Firm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = { business: [], cat: "Hospitals" };
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(
        "http://localhost:4000/business/display/" + this.props.match.params.id
      )
      .then(response => {
        console.log(response.data);
        console.log(this.state.business);
        this.setState({ business: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
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

                <Link to={"/Login"} className="nav-item nav-link">
                  Login
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="container-fluid firmbody">
          <br />
          <div className="container">
            <h2> Search Results for: {this.state.cat}</h2>
            <br />
            <br />
          </div>
          <div>
            {this.state.business.map((object, i) => (
              <div className="row">
                <div className="col-lg-3">
                  <div className="piccol"></div>
                </div>
                <div className="col-lg-9">
                  <h4>{object.Title}</h4>
                  <p>{object.Profile}</p>
                  <p>
                    <b>Location: </b>
                    {object.City}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    <b>Working Days: </b>
                    {object.Wdays}
                    <br />
                    <b>Contact Information: </b> {object.Contact}
                  </p>
                  <br />
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Firm;
