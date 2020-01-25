import React, { Component } from "react";
import "./style.css";
import { Tabs, Tab } from "react-bootstrap";
import TabPane from "react-bootstrap/TabPane";
import Spinner from "react-bootstrap/Spinner";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedin: false,
      email: "",
      pass: "",
      loading: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <div class=" body">
          <div class="square-container">
            <div class="square">
              <br />
              <br />

              <h1>The Business Locator</h1>
              <br />
              {/* Nav tabs */}

              <Tabs defaultActiveKey="home" className="justify-content-center">
                <Tab eventKey="home" title="Sign In">
                  <TabPane>
                    <div class="iconset">
                      <a href="#">
                        <i
                          class="fab fa-facebook-f iconset"
                          style={{ color: "#2E3192" }}
                        ></i>
                      </a>{" "}
                      {"\u00A0"}
                      <a href="#">
                        <i
                          class="fab fa-google iconset"
                          style={{ color: "#9E005D" }}
                        ></i>
                      </a>
                      {"\u00A0"}
                      {"\u00A0"}
                      <a href="#">
                        <i
                          class="fab fa-twitter iconset"
                          style={{ color: "#0071BC" }}
                        ></i>
                      </a>
                      {"\u00A0"}
                      <a href="#">
                        <i
                          class="fab fa-yahoo iconset"
                          style={{ color: "purple" }}
                        ></i>
                      </a>
                      {"\u00A0"}
                    </div>
                    <p style={{ fontFamily: "dosis", fontSize: "12px" }}>OR</p>

                    <form class="login">
                      <div class="login">
                        <input
                          type="text"
                          name="user"
                          placeholder="Username Or E-Mail"
                        />
                        <br />
                        <input
                          type="password"
                          name="pass"
                          placeholder="Password"
                        />
                        <br />
                        <input type="button" value="LOG IN" />
                      </div>
                    </form>
                  </TabPane>
                </Tab>
                <Tab eventKey="profile" title="Sign Up">
                  <TabPane>
                    <div class="iconset">
                      <a href="#">
                        <i
                          class="fab fa-facebook-f iconset"
                          style={{ color: "#2E3192" }}
                        ></i>
                      </a>{" "}
                      {"\u00A0"}
                      <a href="#">
                        <i
                          class="fab fa-google iconset"
                          style={{ color: "#9E005D" }}
                        ></i>
                      </a>
                      {"\u00A0"}
                      {"\u00A0"}
                      <a href="#">
                        <i
                          class="fab fa-twitter iconset"
                          style={{ color: "#0071BC" }}
                        ></i>
                      </a>
                      {"\u00A0"}
                      <a href="#">
                        <i
                          class="fab fa-yahoo iconset"
                          style={{ color: "purple" }}
                        ></i>
                      </a>
                      {"\u00A0"}
                    </div>
                    <p style={{ fontFamily: "dosis", fontSize: "12px" }}>OR</p>

                    <form class="login">
                      <div class="login">
                        <input
                          type="text"
                          name="user"
                          placeholder="Username Or E-Mail"
                        />
                        <br />
                        <input
                          type="password"
                          name="pass"
                          placeholder="Password"
                        />
                        <br />

                        <input type="text" name="mail" placeholder="E-mail" />
                        <br />

                        <input type="button" value="SIGN UP" />
                      </div>
                    </form>
                  </TabPane>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Test;
