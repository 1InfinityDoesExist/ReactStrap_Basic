import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class FormComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Form>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="select">Select</Label>
              <Input
                type="select"
                name="food"
                id="food"
                placeholder="Select Food From The Option"
              >
                <option>Garlic Bread</option>
                <option>Butter Chicken</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="Text">Message</Label>
              <Input
                type="textArea"
                name="message"
                id="message"
                placeholder="Enter The Message"
              />
            </FormGroup>
            <FormGroup>
              <Label for="file">File</Label>
              <Input type="file" name="file" id="id" placeholder="File" />
              <FormText color="primary">
                Select File From Computer Drive
              </FormText>
            </FormGroup>

            <FormGroup tag="fieldset">
              <legend>Radio Button</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" id="radio1" />
                  Kya bay gandu kaisa hey
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio" id="radio1" />
                  Charo paya gand may dal low
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio" id="radio1" disabled />
                  Dhua Dhua kar dengay
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> CheckMeOut
              </Label>
            </FormGroup>
            <FormGroup>
              <Button color="primary">Submit</Button>
            </FormGroup>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
export default FormComponent;
