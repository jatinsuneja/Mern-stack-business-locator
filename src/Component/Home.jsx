import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import axios from "axios";
import { Link } from "react-router-dom";

const slideImages = [
  "images/banner1.jpg",
  "images/banner2.jpg",
  "images/banner3.jpg"
];

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {}
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/business/cat")
      .then(response => {
        this.setState({ business: response.data });
        console.log(this.state.business);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
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
                <Link to={"/Admin"} className="nav-item nav-link">
                  Admin
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div className="slide-container">
            <Slide {...properties}>
              <div className="each-slide">
                <div
                  style={{
                    backgroundImage: `url(${slideImages[0]})`,
                    backgroundPosition: `center`
                  }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{
                    backgroundImage: `url(${slideImages[1]})`,
                    backgroundPosition: `center`
                  }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{
                    backgroundImage: `url(${slideImages[2]})`,
                    backgroundPosition: `center`
                  }}
                ></div>
              </div>
            </Slide>
          </div>
          <div className="container">
            <br />
            <h1 className="cat">Categories</h1>
            <br></br>
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Categories</th>
                </tr>
              </thead>
              <tbody className="">
                {this.state.business.map((object, i) => (
                  <tr>
                    <td>
                      <Link to={"/Firm/" + object.catId}>
                        {object.Category}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
