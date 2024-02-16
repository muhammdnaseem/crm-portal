import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
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
import { DataProvider } from './pages/DataContext';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  const handleLogin = () => {
    // Perform your login logic here
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    console.log("logged in");
  };

  return (
     <DataProvider>
    <Router>
 {/*   <div className={!isLoggedIn ? "" : "d-none"}>
    <LoginPage onLogin={handleLogin}/>
    </div>
    id={!isLoggedIn ? "loginsidebar" : "wrapper"} 
    className={!isLoggedIn ? "d-none" : ""}
    */}
    <div id="wrapper" className={isClosed ? 'toggled' : ''} >
              <div className="overlay" onClick={handleToggle}></div>
              <Sidebar />
              <div id="page-content-wrapper" >
                <button
                  type="button"
                  className="hamburger animated fadeInLeft is-closed"
                  onClick={handleToggle}
                >
                  <span className="hamb-top" style={{ backgroundColor: 'white' }}></span>
                  <span className="hamb-middle" style={{ backgroundColor: 'white' }}></span>
                  <span className="hamb-bottom" style={{ backgroundColor: 'white' }}></span>
                </button>
                <button type="button" className="dashboard">
                  Dashboard
                </button>
                <Profile />
      <Routes>
        
      {/*  {isLoggedIn && ( */}
          <React.Fragment>
           
                <Route path="/home" exact element={<Home />} />
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
            
         
  
     
        </React.Fragment>
      {/*  )} */}
        
      </Routes>
           
      </div>
            </div>
    </Router>
      </DataProvider>
  );
}

export default App;