import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
class ButtonDropDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropOpen: false,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <ButtonDropdown
            direction="left"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret color="primary" size="lg">
              ButtonDropDown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Menu</DropdownItem>
              <DropdownItem disabled>Disabled</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>LastItem</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>

        <div class="container">
          <ButtonDropdown
            isOpen={this.state.dropOpen}
            toggle={() => this.setState({ dropOpen: !this.state.dropOpen })}
            direction="left"
          >
            <DropdownToggle caret color="primary" size="sm">
              FoodMenu
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Dropper</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonDropDownComponent;
