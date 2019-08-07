import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class JumbotronComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Jumbotron>
            <h1 className="display-3">Hello World</h1>
          </Jumbotron>
        </div>

        <div className="container">
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Hello World</h1>
              <p className="lead">This is a pragraph fo the hello World</p>
            </Container>
          </Jumbotron>
        </div>
      </React.Fragment>
    );
  }
}

export default JumbotronComponent;
