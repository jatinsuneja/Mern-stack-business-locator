import React, { Component } from "react";
import Nav from "./Navbar";
import axios from "axios";
import { Dropdown } from "react-bootstrap";

class Loc extends Component {
  constructor(props) {
    super(props);
    this.state = { obj: [], object: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/business/cit")
      .then(response => {
        this.setState({ object: response.data });
        // console.log("Success");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  fetchLoc(id) {
    axios
      .get("http://localhost:4000/business/cit/" + id)
      .then(response => {
        this.setState({ obj: response.data });
        console.log("Success");
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="body">
          <Nav />
          <div className=" container">
            <div className="square col-lg-12 ">
              <h1 className="head">Locations</h1>

              {/* City Drop-Down  */}

              <Dropdown className="head">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select City
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {this.state.object.map((object, i) => (
                    <Dropdown.Item
                      key={i}
                      onClick={() => this.fetchLoc(object._id)}
                    >
                      {object.City}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Write to server */}

              <form onSubmit={this.onSubmit}>
                <label>
                  Location:{"\u00A0"}
                  <input
                    type="text"
                    value={this.state.Loc}
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

              {/* Read from server */}
              <table className="table col-md-12">
                <thead className="thead-dark">
                  <tr>
                    <th>Locations</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {this.state.obj.map((obj, i) => (
                    <tr key={i}>
                      <td>{obj.Loc}</td>
                      {/* <td>
                        <button
                          onClick={() => this.delete(obj._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td> */}
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
export default Loc;
