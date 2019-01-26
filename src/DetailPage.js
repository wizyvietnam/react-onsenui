import React from "react";
import ReactDOM from "react-dom";
import * as dataCard from "./data/dataCard.json";
import {
  Page,
  Toolbar,
  Card,
  Row,
  Col,
  Dialog,
  Button,
  Icon,
  Fab,
  Toast
} from "react-onsenui";

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: dataCard,
      isOpen: false,
      isOpenToast: true
    };
  }
  onCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  onPostShow = () => {
    setTimeout(() => {
      this.setState({
        isOpenToast: false
      });
    }, 1000);
  };
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
          {dataCard.data.map((element, index) => (
            <Card key={index}>
              <Row>
                <Col width="30%">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px"
                    }}
                    src="https://picsum.photos/70/70/?random"
                    alt=""
                  />
                </Col>
                <Col width="55%">
                  <h3 style={{ marginTop: "0" }}>{element.title}</h3>
                  <p>{element.content}</p>
                </Col>
                <Col width="15%">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none"
                    }}
                    onClick={() => {
                      this.setState({
                        isOpen: true
                      });
                    }}
                  >
                    <Icon
                      style={{ color: "#847373" }}
                      size={{ default: 20, material: 20 }}
                      icon={{
                        default: "ion-navicon",
                        material: "md-delete"
                      }}
                    />
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
          <Dialog
            onCancel={this.onCancel}
            isOpen={this.state.isOpen}
            cancelable
          >
            <p style={{ textAlign: "center" }}>
              Are you sure want to delete this item?
            </p>
          </Dialog>
          <Fab
            style={{
              position: "fixed",
              left: "85%",
              marginLeft: "90%",
              top: "85%",
              zIndex: 99999,
              backgroundColor: "#00c853",
              color: "white"
            }}
          >
            <Icon
              icon="fa-twitter"
              size={26}
              fixedWidth={false}
              style={{ verticalAlign: "middle" }}
            />
          </Fab>
          <Toast
            isOpen={this.state.isOpenToast}
            animation="fade"
            animationOptions={{ duration: 0.2, delay: 0.4, timing: "ease-out" }}
            onPostShow={this.onPostShow}
          >
            <p>This is demo Toast</p>
          </Toast>
        </div>
      </Page>
    );
  }
}
