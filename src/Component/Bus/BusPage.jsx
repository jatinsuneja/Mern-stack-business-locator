import React, { Component } from "react";
import Nav from "./Navbar";
import "../Admin/style.css";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";

class BusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Profile: "",
      Address: "",
      Wdays: "",
      Contact: "",
      Logo: ""
    };
    // this.onSubmit = this.onSubmit.bind(this);
    this.onChangeProfile = this.onChangeProfile.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeWdays = this.onChangeWdays.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeLogo = this.onChangeLogo.bind(this);
    this.state = { obj: [], object: [] };
  }
  onChangeLogo(event) {
    this.setState({
      Logo: event.target.value
    });
  }
  onChangeProfile(event) {
    this.setState({
      Profile: event.target.value
    });
  }
  onChangeAddress(event) {
    this.setState({
      Address: event.target.value
    });
  }
  onChangeWdays(event) {
    this.setState({
      Wdays: event.target.value
    });
  }
  onChangeContact(event) {
    this.setState({
      Contact: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const obj = {
      Profile: this.state.Category,
      Address: this.state.City,
      Wdays: this.state.Email,
      Contact: this.state.Title,
      Logo: this.state.Logo
    };
    console.log(obj);
    axios
      .post("http://localhost:4000/business/update/firm", obj)
      .then(console.log("OK"))
      .catch(function(error) {
        console.log(error);
      });

    this.setstate = {
      Profile: "",
      Address: "",
      Wdays: "",
      Contact: "",
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
              <h1 className="head">Profile</h1>
              <div>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Profile Details -</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Address -</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Working Days</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Example- Monday To Friday"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Contact Number -</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Example- 9988882499"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Upload Logo</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Form.Row>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BusPage;
