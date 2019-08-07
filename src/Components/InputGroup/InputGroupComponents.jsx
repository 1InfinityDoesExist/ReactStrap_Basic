import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class InputGroupComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Input />
        </div>

        <div className="container">
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <InputGroupText>@gmail.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </React.Fragment>
    );
  }
}
export default InputGroupComponent;
