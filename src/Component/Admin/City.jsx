import React, { Component } from "react";
import Nav from "./Navbar";
import "./style.css";
import axios from "axios";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = { City: "" };

    this.onChangeCity = this.onChangeCity.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = { business: [] };
    this.delete = this.delete.bind(this);
  }

  onChangeCity(event) {
    this.setState({ City: event.target.value });
  }

  onSubmit(event) {
    // alert('A Category was Added: ' + this.state.Category);
    event.preventDefault();
    const obj = {
      City: this.state.City
    };
    axios
      .post("http://localhost:4000/business/add/cit", obj)
      .then(res => this.fetchLatest());

    this.setState({
      City: ""
    });
  }
  fetchLatest = () => {
    axios
      .get("http://localhost:4000/business/cit")
      .then(response => {
        this.setState({ business: response.data });
        // console.log("Success");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    this.fetchLatest();
  }
  delete(id) {
    console.log(id);
    axios
      .get("http://localhost:4000/business/deletee/" + id)
      .then(this.fetchLatest())
      .catch(err => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        <div className="body">
          <Nav />
          <div className=" container">
            <div className="square col-lg-12 ">
              <h1 className="head">Cities</h1>

              {/* Write to server */}

              <form onSubmit={this.onSubmit}>
                <label>
                  City Name:{"\u00A0"}
                  <input
                    type="text"
                    value={this.state.City}
                    onChange={this.onChangeCity}
                  />
                </label>
                {"\u00A0"}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-outline-dark"
                />
              </form>

              <br />
              <br />
              {/* Read from server */}
              <table className="table col-md-12">
                <thead className="thead-dark">
                  <tr>
                    <th>Cities</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.business.map((object, i) => (
                    <tr key={i}>
                      <td>{object.City}</td>
                      <td>
                        <button
                          onClick={() => this.delete(object._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default City;
