import React from "react";
import ReactDOM from "react-dom";
import { Page, Toolbar, List, ListItem, Row, Col, Switch } from "react-onsenui";

export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
          <List
            dataSource={["Row 1", "Row 3", "Row 4", "Row 5"]}
            renderRow={(row, idx) => (
              <ListItem
                modifier={
                  idx === this.state.data.length - 1 ? "longdivider" : null
                }
              >
                <Row>
                  <Col width="80%">{row}</Col>
                  <Col width="20%">
                    <Switch checked={this.state.checked} onChange={() => {}} />
                  </Col>
                </Row>
              </ListItem>
            )}
          />
        </div>
      </Page>
    );
  }
}
