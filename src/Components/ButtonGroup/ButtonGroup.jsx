import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "reactstrap";

class ButtonGroupComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <ButtonGroup vertical size="lg">
            <Button>Home</Button>
            <Button>House</Button>
            <Button>Ghar</Button>
          </ButtonGroup>
        </div>
        <div class="container">
          <ButtonGroup horizontal size="lg">
            <Button>Home</Button>
            <Button>House</Button>
            <Button>Ghar</Button>
          </ButtonGroup>
        </div>
      </React.Fragment>
    );
  }
}
export default ButtonGroupComponent;
