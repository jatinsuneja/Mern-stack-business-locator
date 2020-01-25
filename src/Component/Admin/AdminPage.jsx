import React, { Component } from "react";
import Nav from "./Navbar";
import "./style.css";
import axios from "axios";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { Category: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { object: [] };
    this.delete = this.delete.bind(this);
  }

  onChangeCategory = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
    const obj = {
      Category: this.state.Category
    };
    axios
      .post("http://localhost:4000/business/add/cat", obj)
      .then(res => this.fetchLatest());
    axios.post("http://localhost:4000/business/add/catno");

    this.setState({
      Category: ""
    });
  }
  fetchLatest = () => {
    axios
      .get("http://localhost:4000/business/cat")
      .then(response => {
        this.setState({ object: response.data });
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
    // console.log(id)
    axios
      .get("http://localhost:4000/business/delete/" + id)
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
              <h1 className="head">Categories</h1>

              {/* Write to server */}

              <form onSubmit={this.onSubmit}>
                <label>
                  Category:{"\u00A0"}
                  <input
                    type="text"
                    name="Category"
                    onChange={this.onChangeCategory}
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
                    <th>Categories</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.object.map((object, i) => (
                    <tr key={i}>
                      <td>{object.Category}</td>
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
export default Admin;
