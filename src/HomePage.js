import React from "react";
import ReactDOM from "react-dom";
import {
  Page,
  Toolbar,
  Button,
  Row,
  Col,
  Input,
  Checkbox
} from "react-onsenui";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      checked: false
    };
  }
  render() {
    return (
      <Page
        renderToolbar={() => (
          <Toolbar>
            <div className="center">Title</div>
          </Toolbar>
        )}
      >
        <div>
          <Row>
            <Col width="20%" />
            <Col width="60%">
              <h3 style={{marginTop:"40px", textAlign: "center" }}>Login</h3>
              <Input
                style={{ marginTop: "20px" }}
                value={this.state.username}
                float
                onChange={event => {
                  this.setState({ username: event.target.value });
                }}
                modifier="material"
                placeholder="Username"
              />
              <Input
                style={{ marginTop: "20px" }}
                value={this.state.password}
                float
                onChange={event => {
                  this.setState({ password: event.target.value });
                }}
                modifier="material"
                placeholder="Password"
              />
              <Row style={{ marginTop: "20px" }}>
                <Col>
                  <span>
                    <Checkbox
                      onChange={event => {
                        this.setState({ checked: event.target.checked });
                      }}
                      modifier="material"
                    />
                    &nbsp;Remember me?
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col width="40%" />
                <Col width="60%">
                  <Button modifier="large--cta">Login</Button>
                </Col>
              </Row>
            </Col>
            <Col width="20%" />
          </Row>
        </div>
      </Page>
    );
  }
}
