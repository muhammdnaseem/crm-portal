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



function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
  <ComponentHeader title="CRM Admin Dashboard" content="Very detailed & featured admin." />
   
      <div className="row">
        <CardBox className="card-box" bgClass="bg-blue" 
        count="Leads"
        icon1= {<MdOutlineCreateNewFolder />}
        content1="Create" 
        icon2={<FaListUl />}
        content2="Records" 
        icon={<IoMdPie />}
        />
        <CardBox className="card-box" bgClass="bg-green" 
        count="Agents"
        icon1= {<MdOutlineCreateNewFolder />}
        content1="Create" 
        icon2={<FaListUl />}
        content2="Records" 
         icon={<TbTargetArrow />} />
        <CardBox className="card-box" bgClass="bg-orange" 
        count="Today Follow Ups"  
        icon1= {<MdOutlineCreateNewFolder />}
        content1="Create" 
        icon2={<FaListUl />}
        content2="Records"  
        icon={<IoMdPie />}/>

        <CardBox className="card-box" bgClass="bg-red" 
        count="Cold" 
        icon2={<FaListUl />}
        content2="Records"  
        icon={<IoMdPie />} />
        
        <CardBox className="card-box" bgClass="bg-red" 
        count="Follow Up Leads" 
        icon2={<FaListUl />}
        content2="Records" 
        icon={<IoMdPie />} />
        
        <CardBox className="card-box" bgClass="bg-red" 
        count="Moderate" 
        icon2={<FaListUl />}
        content2="Records" 
        icon={<IoMdPie />} />
        
        <CardBox className="card-box" bgClass="bg-red" 
        count="Targets" 
        icon1= {<MdOutlineCreateNewFolder />}
        content1="Create" 
        icon2={<FaListUl />}
        content2="Records" 
        icon={<TbTargetArrow />} />
        
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          
        </div>
      </div>
   
    </div>
  );
}

export default AdminDashboard;
