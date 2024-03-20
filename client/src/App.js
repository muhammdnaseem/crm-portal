import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Allotment from './pages/Allotment';
import Categories from './pages/Categories';
import Features from './pages/Features';
import Blocks from './pages/Blocks';
import Documents from './pages/Documents';
import Inventory from './pages/Inventory';
import FeeSetup from './pages/FeeSetup';
import Affiliates from './pages/Affiliates';
import Users from './pages/Users';
import Roles from './pages/Roles';
import Leads from './pages/Leads';
import Tokens from './pages/Tokens';
import BookingForm from './pages/BookingForm';
import InstallmentPlans from './pages/InstallmentPlans';
import TransferCreate from './pages/TransferCreate';
import MergeRequest from './pages/MergeRequest';
import CancellationCreate from './pages/CancellationCreate';
import InstallmentPeriod from './pages/InstallmentPeriod';
import InstallmentType from './pages/InstallmentType';
import InventoryReport from './pages/InventoryReport';
import CommissionReport from './pages/CommissionReport';
import DiscountReport from './pages/DiscountReport';
import TransferReport from './pages/TransferReport';
import SalesReport from './pages/SalesReport';
import { DataProvider } from './pages/DataContext';
import './App.css';

function App() {
  const [isClosed, setIsClosed] = useState(false);

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  return (
    <DataProvider>
      <Router>
        <div id="wrapper" className={isClosed ? 'toggled' : ''}>
          <div className="overlay" onClick={handleToggle}></div>
          <Sidebar />
          <div id="page-content-wrapper">
            <button type="button" className="hamburger animated fadeInLeft is-closed" onClick={handleToggle}>
              <span className="hambcolor hamb-top" style={{ backgroundColor: 'white' }}></span>
              <span className="hambcolor hamb-middle" style={{ backgroundColor: 'white' }}></span>
              <span className="hambcolor hamb-bottom" style={{ backgroundColor: 'white' }}></span>
            </button>
            <button type="button" className="dashboard">
              Dashboard
            </button>
            <Profile />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blocks" element={<Blocks />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/features" element={<Features />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/feesetup" element={<FeeSetup />} />
              <Route path="/affiliates" element={<Affiliates />} />
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/lead" element={<Leads />} />
              <Route path="/token" element={<Tokens />} />
              <Route path="/booking-form" element={<BookingForm />} />
              <Route path="/installment-plans" element={<InstallmentPlans />} />
              <Route path="/allotment" element={<Allotment />} />
              <Route path="/transfer-create" element={<TransferCreate />} />
              <Route path="/merge-request" element={<MergeRequest />} />
              <Route path="/cancellation-request" element={<CancellationCreate />} />
              <Route path="/installment-period" element={<InstallmentPeriod />} />
              <Route path="/installment-type" element={<InstallmentType />} />
              <Route path="/inventory-report" element={<InventoryReport />} />
              <Route path="/discount-report" element={<DiscountReport />} />
              <Route path="/commission-report" element={<CommissionReport />} />
              <Route path="/transfer-report" element={<TransferReport />} />
              <Route path="/sales-report" element={<SalesReport />} />
              
            </Routes>
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
