import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxDashboard } from "react-icons/rx";
import ComponentHeader from './ComponentHeader';
import CardBox from './CardBox';
import { IoMdPie } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import '../assets/css/admindashboard.css';
import { useDataContext } from '../pages/DataContext';



function AdminDashboard() {
    const { blocksTableData, projectsTableData, agentsTableData, usersTableData, leadTableData } = useDataContext();
    const projectsTableRowCount = projectsTableData.length;
    const blocksTableRowCount = blocksTableData.length;
    const agentsTableRowCount = agentsTableData.length;
    const usersTableRowCount = usersTableData.length;
    const leadTableRowCount = leadTableData.length;
    
  return (
    <div className="admin-dashboard-container">






  <ComponentHeader title="CRM Admin Dashboard" content="Very detailed & featured admin." />
   
      <div className="row">
        <CardBox className="card-box" bgClass="bg-blue" 
        title="Projects"
      
        count={projectsTableRowCount} 
        icon= {<FaListUl />}
        
        />
        <CardBox className="card-box" bgClass="bg-green" 
        title="Blocks"
        
        count={blocksTableRowCount} 
        icon= {<FaListUl />}
         />
        <CardBox className="card-box" bgClass="bg-orange" 
        title="Agents"  
        
        count={agentsTableRowCount} 
        icon= {<FaListUl />}
       />

        <CardBox className="card-box" bgClass="bg-red" 
        title="Bookings"
        count={usersTableRowCount} 
    
         icon={<FaListUl />}
         />
        
        <CardBox className="card-box" bgClass="bg-red" 
        title="Leads" 
       
        count={leadTableRowCount} 
         icon={<FaListUl />}
         />
        
        <CardBox className="card-box" bgClass="bg-red" 
        title="Users" 
        count={usersTableRowCount} 
        icon={<IoMdPie />} />
        
       
        
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          
        </div>
      </div>
   
    </div>
  );
}

export default AdminDashboard;
