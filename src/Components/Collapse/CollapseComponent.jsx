import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  CardHeader,
  CardLink,
  Button,
  Row,
  Col
} from "reactstrap";

class CollapseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(state => ({
      collapse: !state.collapse
    }));
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Button color="danger" onClick={this.toggle}>
            Collapse
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardHeader>Header</CardHeader>
              <CardBody>
                <CardTitle>Titel</CardTitle>
                <CardSubtitle>CardSubtitle</CardSubtitle>
                <CardText>Text</CardText>
                <CardLink>
                  <a href="https://www.facebook.com">Facebook</a>
                </CardLink>
                <Button outline color="primary">
                  Button
                </Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Collapse>
        </div>
      </React.Fragment>
    );
  }
}

export default CollapseComponent;
