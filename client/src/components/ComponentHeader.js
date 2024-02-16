import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/componentheader.css';
import { RxDashboard } from "react-icons/rx";

function ComponentHeader({title, content}) {
  return (
    <div className="container">
  <div className="row d-flex">
  <div className="col-1">
<RxDashboard className="heading-icon"/>
  </div>
  <div className="col-9">
  <h2 className="heading"> {title} </h2>
  <p> {content} </p>
  </div>
  </div>
     
    </div>
  );
}

export default ComponentHeader;
