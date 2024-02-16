
import '../assets/css/sidebar.css';
import React, { useState } from 'react';
import Header from './Header';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




function Sidebar() {
  const [isClosed, setIsClosed] = useState(false);

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div>
   
    <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
       <ul className="nav sidebar-nav">
  <div className="sidebar-header">
    <div className="sidebar-brand">
      Echo Glitch CRM
    </div>
  </div>
  <li><a href="#home" className="title">Dashboard</a></li>
   <li className="dropdown-wrapper">
    <NavDropdown title="System Setup" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/login">login </Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/projects">Projects </Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/blocks">Blocks</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/categories">Categories</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/features">Features</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/documents">Documents</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/inventory">Inventory</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/feesetup">Fee Setup</Link></NavDropdown.Item>
    </NavDropdown>
  </li>
   <li className="dropdown-wrapper">
    <NavDropdown title="People" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/affiliates">Affiliates </Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/users">Users</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Roles</Link></NavDropdown.Item>
      
    </NavDropdown>
  </li>
  <li><Link to="/lead">Lead</Link></li>
  <li><Link to="/token">Token</Link></li>
  <li className="dropdown-wrapper">
    <NavDropdown title="Booking" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/booking-form">Boking Forms</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Booking List</Link></NavDropdown.Item>
    </NavDropdown>
  </li>

  <li className="dropdown-wrapper">
    <NavDropdown title="Payments" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/installment-plans">Installment Plans</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/installment-list">View Installments</Link></NavDropdown.Item>
    </NavDropdown>
  </li>

  <li className="dropdown-wrapper">
    <NavDropdown title="Allotments" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/allotment">Create Request</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Pending Request</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Approved</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Delivered</Link></NavDropdown.Item>
    </NavDropdown>
  </li>

  <li className="dropdown-wrapper">
    <NavDropdown title="Transfer Plots" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/transfer-create">Transfer Create</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Transfer Record</Link></NavDropdown.Item>
    </NavDropdown>
  </li>

  <li className="dropdown-wrapper">
    <NavDropdown title="NDC" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/roles">Create</Link></NavDropdown.Item>
    </NavDropdown>
  </li>

  <li className="dropdown-wrapper">
    <NavDropdown title="Merger" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/merge-request">Create Request</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Record</Link></NavDropdown.Item>
    </NavDropdown>
  </li>

  <li className="dropdown-wrapper">
    <NavDropdown title="Cancellation" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/cancellation-request">Create Request</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Record</Link></NavDropdown.Item>
    </NavDropdown>
  </li>

  <li><Link to="#services">Notices</Link></li>
  <li><Link href="#contact">Media</Link></li>
  <li><Link href="#followme">Activity Log</Link></li>

  <li className="dropdown-wrapper">
    <NavDropdown title="Reports" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/roles">Call List</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Meeting List</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Outstanding Report</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Commision Report</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Inventory Report</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Discount Report</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Sales Report</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Gain Tax Report</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Collection Report</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Agent wise sales</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/roles">Transfer Report</Link></NavDropdown.Item>
    </NavDropdown>
  </li>

  <li className="dropdown-wrapper">
    <NavDropdown title="Installments Options" id="basic-nav-dropdown" >
      <NavDropdown.Item ><Link to="/installment-period">Installment Periods</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to="/installment-type">Payment Type</Link></NavDropdown.Item>
    </NavDropdown>
  </li>


</ul>

      </nav>
    
    </div>
  );
}

export default Sidebar;
