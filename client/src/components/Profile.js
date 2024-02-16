import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiMenuFries } from "react-icons/ci";

function Profile() {
  return (
    <React.Fragment>
  
       <Nav className="admin">
          <NavDropdown title="Admin" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </React.Fragment>
  );
}

export default Profile;
