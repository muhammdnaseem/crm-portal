import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiMenuFries } from "react-icons/ci";
import jwtDecode from 'jwt-decode'; // Correct import statement

function Profile() {
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState(null); // State to store the admin's name

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (token) {
      // const decodedToken = jwtDecode(token); // Decode the token using jwtDecode
      const adminName = "Admin Name"; // Extract admin's name from the decoded token
      setName(adminName); // Set the admin's name in the state
    }
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsLoggedIn(false); // Set isLoggedIn state to false
    
  }

  return (
    <React.Fragment>
      <Nav className="admin">
        {name && (
          <NavDropdown className="profile" title={name} id="basic-nav-dropdown" style={{ color: "white" }}>
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item> {/* Call handleLogout when logout is clicked */}
          </NavDropdown>
        )}
      </Nav>
    </React.Fragment>
  );
}

export default Profile;
