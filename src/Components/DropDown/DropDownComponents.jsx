import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class DropDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Dropdown
            direction="up"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret color="primary">
              DropDown
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header> Header</DropdownItem>
              <DropdownItem disabled>Disabled</DropdownItem>
              <DropdownItem divider />
            </DropdownMenu>
          </Dropdown>
        </div>
        <br />
        <div className="container">
          <UncontrolledDropdown direction="up">
            <DropdownToggle caret color="success">
              DropDownSecond
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Disabled</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>First</DropdownItem>
              <DropdownItem>Second</DropdownItem>
              <DropdownItem>Third</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <br />
        <div className="container">
          <Dropdown
            size="sm"
            direction="right"
            isOpen={this.state.dropdownOpener}
            toggle={() => {
              this.setState({ dropdownOpener: !this.state.dropdownOpener });
            }}
          >
            <DropdownToggle caret color="danger">
              DropIt
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem Header>Header</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </React.Fragment>
    );
  }
}

export default DropDownComponent;
