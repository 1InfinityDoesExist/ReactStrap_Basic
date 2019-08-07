import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const example = props => {
  return (
    <div class="container">
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem active>Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Jome
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Dome</a>
        </BreadcrumbItem>
        <BreadcrumbItem active> Date</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default example;
