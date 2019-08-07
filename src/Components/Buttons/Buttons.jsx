import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

class ButtonComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <Button color="primary">Primary</Button>
          <Button outline color="secondary">
            Secondary
          </Button>
          <Button color="success" size="lg">
            Success
          </Button>
          <Button color="warning" size="sm">
            Warning
          </Button>
          <Button color="danger" size="lg" block>
            Danger
          </Button>
          <Button color="dark" active>
            ActiveDark
          </Button>
          <Button color="info" disabled>
            ActiveDark
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonComponent;
