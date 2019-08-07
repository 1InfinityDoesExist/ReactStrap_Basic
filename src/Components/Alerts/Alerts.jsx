import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "reactstrap";
import { UncontrolledAlert } from "reactstrap";
class AlertDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Alert color="primary">This Is For Primary Color</Alert>
          <Alert color="secondary">This Is For secondary Color</Alert>
          <Alert color="success">This Is For success Color</Alert>
          <Alert color="warning">This Is For warning Color</Alert>
          <Alert color="danger">This Is For danger Color</Alert>
          <Alert color="info">This Is For info Color</Alert>
          <Alert color="bright">This Is For bright Color</Alert>
          <Alert color="dark">This Is For dark Color</Alert>
        </div>
        <div className="container">
          <Alert color="primary">
            This One Is For Link{" "}
            <a href="https://www.youtube.com" className="alert-link">
              Kya Bay Gandu Kisa Hey
            </a>
          </Alert>
        </div>
        <div className="container">
          <Alert color="danger">
            <h4 className="alert-heading">Yeh Hey Alert Heading</h4>
            <p>Ye hey paragrah ye v paragraph hey</p>
            <hr />
            <p className="mb-0"> Ye hey after margin wala</p>
          </Alert>
        </div>

        <div className="container">
          <Alert
            color="danger"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
            fade={false}
          >
            I am an alert and i can be dismissed
          </Alert>
        </div>

        <div className="container">
          <UncontrolledAlert color="danger">
            ye hey UncontrollerdAlert and aab kya karega...bay
          </UncontrolledAlert>
        </div>
      </React.Fragment>
    );
  }
}
export default AlertDemo;
