import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ListGroup,
  ListGroupItem,
  Badge,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class ListGroupComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ListGroup flush>
            <ListGroupItem color="danger">
              I Know Why You Do That To Me <Badge pill>4</Badge>
            </ListGroupItem>
            <ListGroupItem color="success">
              Whatever You Did Was Wrong
            </ListGroupItem>
            <ListGroupItem tag="a" href="https://www.google.com">
              You Should't Have Treated Me Like That
            </ListGroupItem>

            <ListGroupItem disabled>
              <ListGroupItemHeading>Heading Of ListGroup</ListGroupItemHeading>
              <ListGroupItemText>I Am The Text</ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem active>
              <ListGroupItemHeading>May Hu Heading</ListGroupItemHeading>
              <ListGroupItemText>May hu Text</ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </div>

        <div className="container">
          <h3>Anchors</h3>
          <p>
            Be Who You Are
            <strong>
              i knew it was my mistake<code>.btn</code>
            </strong>
          </p>

          <ListGroup>
            <ListGroupItem active tag="a" href="#">
              Hi Babu ....!!!
            </ListGroupItem>
            <ListGroupItem tag="button" action>
              {" "}
              kya bay gandu
            </ListGroupItem>
          </ListGroup>
        </div>
      </React.Fragment>
    );
  }
}

export default ListGroupComponent;
