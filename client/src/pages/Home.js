import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AdminDashboard from '../components/AdminDashboard';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [isClosed, setIsClosed] = useState(false);

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  return (


    <React.Fragment >


      <AdminDashboard />


    </React.Fragment>

  );
}

export default Home;
