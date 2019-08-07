import React, { Component } from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//dark, striped, bordered, boderless, hover, responsive
class TableComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Table size="sm" responsive>
            <thead>
              <tr>
                <th>S.No</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>RollNumber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Wick</td>
                <td>IIT2014006</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="container">
          <Table dark size="sm">
            <thead>
              <tr>
                <th>S.No</th>
                <th>A</th>
                <th>B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Avinash</td>
                <td>Patel</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default TableComponent;
