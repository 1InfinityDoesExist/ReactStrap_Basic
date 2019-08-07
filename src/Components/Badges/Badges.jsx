import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Button } from "reactstrap";
class BadgeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="light">Light</Badge>
          <Badge color="dark">Dark</Badge>
        </div>

        <div class="container">
          <h1>
            Notification <Badge color="danger"> Danger</Badge>
          </h1>
        </div>

        <div class="container">
          <Badge color="success" pill>
            {" "}
            Pill
          </Badge>
        </div>

        <div class="container">
          <Button color="success" outline>
            LogIn<Badge color="warning">Warning</Badge>
          </Button>
        </div>

        <div class="container">
          <Badge color="primary" href="https://www.google.com" pill>
            Link
          </Badge>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeComponent;
