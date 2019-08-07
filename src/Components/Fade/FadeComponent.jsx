import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Fade } from "reactstrap";

class FadeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      fadeIn: !prevState.fadeIn
    }));
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Button color="danger" size="sm" onClick={this.toggle}>
            Fade
          </Button>
          <Fade in={this.state.fadeIn} tag="h5" className="mt-5">
            Nahi jana bhula kar key....ye bate tum he karte they
          </Fade>
        </div>
      </React.Fragment>
    );
  }
}

export default FadeComponent;
