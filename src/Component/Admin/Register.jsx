import React, { Component } from "react";
import Nav from "./Navbar";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";
import ImageUploader from "react-images-upload";

class Reg extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Category: "",
      City: "",
      Title: "",
      Email: "",
      Password: "",
      Logo: ""
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeLogo = this.onChangeLogo.bind(this);

    this.state = { obj: [], object: [] };
  }
  onChangeLogo(event) {
    this.setState({
      Logo: event.target.value
    });
  }
  onChangeCategory(event) {
    this.setState({
      Category: event.target.value
    });
  }
  onChangeCity(event) {
    this.setState({
      City: event.target.value
    });
  }
  onChangeEmail(event) {
    this.setState({
      Email: event.target.value
    });
  }
  onChangePassword(event) {
    this.setState({
      Password: event.target.value
    });
  }
  onChangeTitle(event) {
    this.setState({
      Title: event.target.value
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/business/cat")
      .then(response => {
        this.setState({ object: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get("http://localhost:4000/business/cit")
      .then(response => {
        this.setState({ object: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onSubmit(event) {
    event.preventDefault();
    const obj = {
      Category: this.state.Category,
      City: this.state.City,
      Email: this.state.Email,
      Title: this.state.Title,
      Password: this.state.Password,
      Logo: this.state.Logo
    };
    console.log(obj);
    axios
      .post("http://localhost:4000/business/add/firm", obj)
      .then(console.log("OK"))
      .catch(function(error) {
        console.log(error);
      });

    this.setstate = {
      Category: "",
      City: "",
      Title: "",
      Email: "",
      Password: "",
      Logo: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="body">
          <Nav />
          <div className=" container">
            <div className="square col-lg-12 ">
              <h1 className="head">Register New Business</h1>

              <Form onSubmit={this.onSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" onChange={this.onChangeCategory}>
                      <option>Select Category</option>
                      {this.state.object.map((object, i) => (
                        <option
                          key={i}
                          onClick={() => this.fetchLoc(object._id)}
                          value={this.state.Category}
                        >
                          {object.Category}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control as="select" onChange={this.onChangeCity}>
                      <option>Select Category</option>

                      {this.state.object.map((object, i) => (
                        <option
                          key={i}
                          onClick={() => this.fetchLoc(object._id)}
                          value={this.state.City}
                        >
                          {object.City}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={this.state.Email}
                      onChange={this.onChangeEmail}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={this.state.Password}
                      onChange={this.onChangePassword}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      placeholder="Example Business"
                      value={this.state.Title}
                      onChange={this.onChangeTitle}
                    />
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <br />
                <br />
                <br />
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Reg;
