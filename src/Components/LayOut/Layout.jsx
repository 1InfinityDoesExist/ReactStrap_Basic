import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class LayoutComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="3">Hi </Col>
            <Col xs="auto">Babu</Col>
            <Col xs="5">Missed</Col>
            <Col>Me</Col>
            <Col>I </Col>
            <Col>Know</Col>
            <Col>You Dont</Col>
          </Row>

          <Row>
            <Col xs="2">Hello Brother</Col>
            <Col xs="4">Hi Babu</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default LayoutComponent;
