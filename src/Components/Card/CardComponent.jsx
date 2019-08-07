import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardGroup,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
  CardLink,
  Row,
  Col,
  CardHeader,
  CardFooter
} from "reactstrap";

class CardComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardSubtitle>Card Subtitle</CardSubtitle>
              <CardText>I should'n have left her alone</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div class="container">
          <Row>
            <Col sm="6">
              <Card inverse color="danger">
                <CardBody className="text-right">
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardSubtitle>SubTitle</CardSubtitle>
                  <CardText>Text</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card outline color="primary">
                <CardHeader>CardHeader</CardHeader>
                <CardBody className="text-center">
                  <CardTitle>Title</CardTitle>
                  <CardSubtitle>SubTitle</CardSubtitle>
                  <CardText>Text</CardText>
                  <CardLink href="https://www.youtube.com">Youtube</CardLink>
                  <Button outline color="success">
                    Go Somewhere
                  </Button>
                </CardBody>
                <CardFooter>CardFooter</CardFooter>
              </Card>
            </Col>
          </Row>
        </div>

        <div class="container">
          <Row>
            <Col sm="2">
              <Card>
                <CardHeader>Header</CardHeader>
                <CardImg />
                <CardBody>
                  <CardTitle>Titel</CardTitle>
                  <CardSubtitle>CardSubtitle</CardSubtitle>
                  <CardText>CardText</CardText>
                  <CardLink>
                    {" "}
                    <a href="https://www.youtube.com">Youtube</a>
                  </CardLink>
                  <Button outline color="success">
                    Button
                  </Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </Col>
            <Col sm="6">
              <Card outline color="success">
                <CardHeader>Header</CardHeader>
                <CardImg />
                <CardBody>
                  <CardTitle>Title</CardTitle>
                  <CardSubtitle>SubTitle</CardSubtitle>
                  <CardText>Text</CardText>
                  <CardLink>
                    {" "}
                    <a href="https://www.facebook.com">Facebook</a>
                  </CardLink>
                  <Button color="primary">LogIn</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default CardComponent;
